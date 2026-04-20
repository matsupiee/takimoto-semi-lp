import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const CATEGORIES = [
  { value: "media", label: "取材・メディア掲載" },
  { value: "collaboration", label: "共同研究・連携のご相談" },
  { value: "recruit", label: "新歓・活動参加について" },
  { value: "other", label: "その他" },
] as const;

const contactSchema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください").max(100),
  email: z.string().trim().email("正しいメールアドレスを入力してください"),
  affiliation: z.string().trim().max(100).optional(),
  category: z.enum(["media", "collaboration", "recruit", "other"], {
    error: "お問い合わせ種別を選択してください",
  }),
  message: z
    .string()
    .trim()
    .min(10, "10文字以上でお問い合わせ内容をご記入ください")
    .max(2000, "2000文字以内でご記入ください"),
  agreed: z.literal(true, { error: "プライバシーポリシーへの同意が必要です" }),
});

type FormValues = {
  name: string;
  email: string;
  affiliation: string;
  category: string;
  message: string;
  agreed: boolean;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  affiliation: "",
  category: "",
  message: "",
  agreed: false,
};

const inputClass =
  "block w-full rounded-md border border-black/15 bg-white px-4 py-3 text-base text-[#1c2b33] outline-none transition focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/20 aria-invalid:border-red-500 aria-invalid:focus:ring-red-500/20";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const parsed = contactSchema.safeParse({
      ...values,
      affiliation: values.affiliation || undefined,
    });

    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues | undefined;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("入力内容にエラーがあります");
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      toast.success("お問い合わせを受け付けました。返信までしばらくお待ちください。");
      setValues(initialValues);
      setErrors({});
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <Field id="name" label="お名前" required error={errors.name}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          className={inputClass}
        />
      </Field>

      <Field id="email" label="メールアドレス" required error={errors.email}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          className={inputClass}
        />
      </Field>

      <Field id="affiliation" label="ご所属（任意）" error={errors.affiliation}>
        <input
          id="affiliation"
          type="text"
          autoComplete="organization"
          placeholder="例：◯◯大学 / ◯◯株式会社"
          value={values.affiliation}
          onChange={(e) => update("affiliation", e.target.value)}
          aria-invalid={Boolean(errors.affiliation)}
          className={inputClass}
        />
      </Field>

      <Field id="category" label="お問い合わせ種別" required error={errors.category}>
        <select
          id="category"
          value={values.category}
          onChange={(e) => update("category", e.target.value)}
          aria-invalid={Boolean(errors.category)}
          className={inputClass}
        >
          <option value="" disabled>
            選択してください
          </option>
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="お問い合わせ内容" required error={errors.message}>
        <textarea
          id="message"
          rows={8}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          className={`${inputClass} resize-y`}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm text-[#1c2b33]">
          <input
            type="checkbox"
            checked={values.agreed}
            onChange={(e) => update("agreed", e.target.checked)}
            aria-invalid={Boolean(errors.agreed)}
            className="mt-1 size-4 rounded border-black/30 text-[#1877f2] focus:ring-[#1877f2]/30"
          />
          <span>
            ご記入いただいた個人情報は、お問い合わせへの回答および記録のためにのみ利用いたします。
          </span>
        </label>
        {errors.agreed && <p className="text-sm text-red-600">{errors.agreed}</p>}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-[#1c2b33] px-8 py-3 text-[15px] font-medium text-white shadow-sm transition hover:bg-[#1c2b33]/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "送信中..." : "送信する"}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-[#1c2b33]">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>
      {children}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
