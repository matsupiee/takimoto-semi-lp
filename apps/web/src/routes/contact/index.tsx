import { createFileRoute } from "@tanstack/react-router";

import { pageHead } from "@/lib/site";

import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import PageContainer from "../../shared/_components/layout/page-container";
import SectionHeader from "../../shared/_components/section-header";
import LineCta from "./_components/line-cta";

export const Route = createFileRoute("/contact/")({
  component: ContactPage,
  head: () =>
    pageHead({
      title: "お問い合わせ | 瀧本ゼミ政策分析パート",
      description:
        "瀧本ゼミ政策分析パートへのお問い合わせページです。取材・共同研究のご相談・新歓に関するご質問は、公式LINEまたはメールにて受け付けています。",
      path: "/contact",
    }),
});

const TOPICS = [
  {
    title: "取材・メディア掲載",
    description: "活動内容の取材や記事掲載のご依頼を承ります。",
  },
  {
    title: "共同研究・連携のご相談",
    description: "自治体・企業・研究機関のみなさまとの連携についてご相談ください。",
  },
  {
    title: "新歓・活動参加について",
    description: "ゼミの活動内容や参加方法に関するご質問にお答えします。",
  },
  {
    title: "その他",
    description: "上記に当てはまらないご連絡もお気軽にお寄せください。",
  },
];

const CONTACT_CHANNELS = [
  {
    title: "メールでのお問い合わせ",
    description:
      "LINEをご利用でない方や、資料の送付が必要な場合はこちらへ。ご返信までに数日いただく場合がございます。お急ぎの場合はその旨ご記入ください。",
    value: "tsemi.politics@gmail.com",
    href: "mailto:tsemi.politics@gmail.com",
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
        <PageContainer as="section" width="default" className="py-12 md:py-16">
          <SectionHeader eyebrow="Contact" title="お問い合わせ" as="h1" />
          <p className="mt-6 max-w-2xl text-pretty text-base leading-jp-body md:mt-8 text-ink/80 md:text-lg">
            瀧本ゼミ政策分析パートへのご連絡は、公式LINEにて受け付けています。
            取材依頼・共同研究のご相談・新歓に関するご質問など、お気軽にお送りください。
          </p>
        </PageContainer>

        <PageContainer
          as="section"
          className="grid grid-cols-1 gap-12 pb-12 md:pb-16 lg:grid-cols-12 lg:gap-16"
          width="default"
        >
          <div className="lg:col-span-7">
            <LineCta />

            <div className="mt-12">
              <h2 className="text-xl font-semibold text-ink md:text-2xl">
                こんなご相談を承っています
              </h2>
              <ul className="mt-6 flex flex-col gap-5">
                {TOPICS.map((topic) => (
                  <li key={topic.title} className="border-b border-black/10 pb-5">
                    <p className="text-sm font-semibold text-ink">{topic.title}</p>
                    <p className="mt-2 text-sm text-ink/75">{topic.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border-t border-black/10 pt-8 lg:border-0 lg:pt-0">
              <h2 className="text-xl font-semibold text-ink md:text-2xl">その他のご連絡方法</h2>
              <ul className="mt-6 flex flex-col gap-6">
                {CONTACT_CHANNELS.map((channel) => (
                  <li key={channel.title} className="border-b border-black/10 pb-6">
                    <p className="text-sm font-semibold text-ink">{channel.title}</p>
                    <p className="mt-2 text-sm text-ink/75">{channel.description}</p>
                    {channel.isLink ? (
                      <a
                        href={channel.value}
                        className="mt-3 inline-flex text-sm font-medium text-brand-blue hover:underline"
                      >
                        {channel.linkLabel}
                      </a>
                    ) : (
                      <a
                        href={channel.href}
                        className="mt-3 inline-flex font-mono text-sm text-brand-blue hover:underline"
                      >
                        {channel.value}
                      </a>
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
