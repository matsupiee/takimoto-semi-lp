import { createFileRoute } from "@tanstack/react-router";

import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import PageContainer from "../../shared/_components/layout/page-container";
import SectionHeader from "../../shared/_components/section-header";
import ContactForm from "./_components/contact-form";

export const Route = createFileRoute("/contact/")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "お問い合わせ | 瀧本ゼミ政策分析パート" }],
  }),
});

const CONTACT_CHANNELS = [
  {
    title: "メールでのお問い合わせ",
    description: "ご返信までに数日いただく場合がございます。お急ぎの場合はその旨ご記入ください。",
    value: "contact@takimoto-seminar.example",
  },
  {
    title: "新歓に関するお問い合わせ",
    description: "新歓イベントや活動内容については、新歓案内ページもあわせてご確認ください。",
    value: "/recruit",
    isLink: true,
    linkLabel: "新歓案内を見る",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer as="section" className="py-12">
          <SectionHeader eyebrow="Contact" title="お問い合わせ" as="h1" />
          <p className="mt-6 max-w-3xl text-base text-[#1c2b33]/80 md:text-lg">
            瀧本ゼミ政策分析パートへのご連絡は、こちらのフォームよりお願いいたします。
            取材依頼・共同研究のご相談・新歓に関するご質問など、お気軽にご記入ください。
          </p>
        </PageContainer>

        <PageContainer
          as="section"
          className="grid grid-cols-1 gap-12 pb-16 md:pb-24 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="border-t border-black/10 pt-8 lg:border-0 lg:pt-0">
              <h2 className="text-xl font-semibold text-[#1c2b33] md:text-2xl">
                その他のご連絡方法
              </h2>
              <ul className="mt-6 flex flex-col gap-6">
                {CONTACT_CHANNELS.map((channel) => (
                  <li key={channel.title} className="border-b border-black/10 pb-6">
                    <p className="text-sm font-semibold text-[#1c2b33]">{channel.title}</p>
                    <p className="mt-2 text-sm text-[#1c2b33]/75">{channel.description}</p>
                    {channel.isLink ? (
                      <a
                        href={channel.value}
                        className="mt-3 inline-flex text-sm font-medium text-[#1877f2] hover:underline"
                      >
                        {channel.linkLabel}
                      </a>
                    ) : (
                      <p className="mt-3 font-mono text-sm text-[#1c2b33]">{channel.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
