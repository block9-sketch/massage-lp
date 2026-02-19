/*
 * Design: Scandinavian Wellness × Biophilic Design
 * Colors: Cream (#FDFAF5), Terracotta (primary), Sage Green (secondary)
 * Typography: DM Serif Display (headings) + Noto Sans JP (body)
 * Layout: Asymmetric, left-aligned text blocks, organic curves
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  Leaf,
  Droplets,
  Flame,
  Wind,
  Menu,
  X,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

// ── Image URLs (CDN) ──────────────────────────────────────────────────────────
const HERO_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/izCCIlQPxxjayziw6gCxfS/sandbox/mlAO4X8dDXSP30YolsXRog-img-1_1771544943000_na1fn_bWFzc2FnZS1oZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaXpDQ0lsUVB4eGpheXppdzZnQ3hmUy9zYW5kYm94L21sQU80WDhkRFhTUDMwWW9sc1hSb2ctaW1nLTFfMTc3MTU0NDk0MzAwMF9uYTFmbl9iV0Z6YzJGblpTMWhaWEp2LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JwQDAA8aICCj-g9CX87pT56vQ~zTfIXUTEgBy351QkLmjC4bUM1AB1VcD2Szuwdt6HZ0KZTVjQcGcq4jWqXk13VS4719RQq04jUv0wzoo3U6qX3agyj4rYYp4gAiygsaGV7e~F5d5OCDA20Bu89~-Rfe0zdNlX3hksK1NYseBtBzvq3t0-8Hts9VtLB1Ts5FuhiHaHIpDiRybxgOnQlHAoHE8p1Q0jAd-NdZzKpCZs9nvJCYg-s5MACNGZCpb3QapL3DCpx6tzhl-67EI~tq-ROs-tBVKfZhm4FIrZYdehQxWriBK7sxU1hRELJQ7GWOX~kBwYgMemtOj2igTXdMpA__";
const TREATMENT_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/izCCIlQPxxjayziw6gCxfS/sandbox/mlAO4X8dDXSP30YolsXRog-img-2_1771544953000_na1fn_bWFzc2FnZS10cmVhdG1lbnQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaXpDQ0lsUVB4eGpheXppdzZnQ3hmUy9zYW5kYm94L21sQU80WDhkRFhTUDMwWW9sc1hSb2ctaW1nLTJfMTc3MTU0NDk1MzAwMF9uYTFmbl9iV0Z6YzJGblpTMTBjbVZoZEcxbGJuUS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=R3Jb5ceHIjjd-GqFy~bN9ve-~e7FWVhNP4B1EZU1a5BTNu-mlWYBalphJdDy5ZHcOHcENFb8t3rvWTXVk29pw1M4R5~Mv29ULrea8Ny5OOLSxun3y91fR2Som~-wIStE~yM7FytKYBdTTB5efq22P9zCT7dLC95fxz8Z4AVHrbpNbOGwfg9X7upzsUvdqtMFo6ddEU775NOPlksu1ODZnDvZS4Uciltet9cQX4BD-iig4-n~pA1F9mHAcS3oc0M2JYMqrbNdvIwZVshFbRRQ734YM5rhFhIipj8Xq3N5MBXah~PmSAvKJtFn1Df8t0EfAKEuHl4E8WU1Uqxj4dJPpg__";
const AROMA_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/izCCIlQPxxjayziw6gCxfS/sandbox/mlAO4X8dDXSP30YolsXRog-img-3_1771544954000_na1fn_bWFzc2FnZS1hcm9tYXRoZXJhcHk.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaXpDQ0lsUVB4eGpheXppdzZnQ3hmUy9zYW5kYm94L21sQU80WDhkRFhTUDMwWW9sc1hSb2ctaW1nLTNfMTc3MTU0NDk1NDAwMF9uYTFmbl9iV0Z6YzJGblpTMWhjbTl0WVhSb1pYSmhjSGsuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LA4bjj6QeQdMkjzrNK~vm-H8W4eq3qAXlWM4y7KcVFU2bqoH6e23pugkwdt3F8eff~MGOmQAT5A8FAlz3OJv-yoMWI68eyUtaHFTSDEeAXiDVWhgI5rB1axU1kv7g5glSxO0Oow0z0qfOYkQkzFczQe7fEZAwPgKk1~nHYL8hl6AQB4kfxLF8MCmoY7kRRqBiklHxrPmNawiHXRfycAJ5VnekhO68aZB9-YNqw2pA-2wcmRhkPG5K-V673LmQle8eTHmcBkRPCuWhk4YAhbj4~EOWza5clvVircGtDssIc-1gHbWq6RtAdZ-pCC042sFiDTXKAdSpz~X63p-uJ-rjw__";
const INTERIOR_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/izCCIlQPxxjayziw6gCxfS/sandbox/mlAO4X8dDXSP30YolsXRog-img-4_1771544949000_na1fn_bWFzc2FnZS1pbnRlcmlvcg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaXpDQ0lsUVB4eGpheXppdzZnQ3hmUy9zYW5kYm94L21sQU80WDhkRFhTUDMwWW9sc1hSb2ctaW1nLTRfMTc3MTU0NDk0OTAwMF9uYTFmbl9iV0Z6YzJGblpTMXBiblJsY21sdmNnLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=P-9qAuk35U4Ez8QrYEe0kuImfNNCntGR4oQ8XNXGnvbovLdlVB6RERPazrxw9ru3HGpNJwCPi1HNFyG03-pUe3uO1cRQwizdFVzsYSj~KzP5CDDHIauSxfwS52yuMCA7veNe-6q27eYFTrUf4sk0WfiQbpstrM4UoEapfIoDDucrNtxu6kjBzkVIhnqe98TexBqKHuN7lyTUAFkbVwOg4-ciAlHWoDikIfyuIaeCRErATV28yZK5QC6-g9RRPfVS5f5GGJn5ce6zJXnGJZhrOK5ZHx~2Irf1IJ5PlqMFKviEilyF3z6UKg~AcETzUY0doiH8kT9B2RxQLfJZ19ZuJQ__";

// ── Intersection Observer hook ────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Data ──────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: <Droplets className="w-6 h-6" />,
    name: "アロマトリートメント",
    duration: "60 / 90 / 120分",
    price: "¥8,800〜",
    desc: "天然精油をブレンドしたオイルで全身をほぐします。心地よい香りが副交感神経を刺激し、深いリラクゼーションへ導きます。",
    tag: "人気No.1",
  },
  {
    icon: <Flame className="w-6 h-6" />,
    name: "ホットストーンマッサージ",
    duration: "90 / 120分",
    price: "¥12,000〜",
    desc: "温めた玄武岩を使用し、筋肉の深部まで熱を届けます。慢性的なコリや冷え性に特に効果的なトリートメントです。",
    tag: "おすすめ",
  },
  {
    icon: <Wind className="w-6 h-6" />,
    name: "スウェーデン式マッサージ",
    duration: "60 / 90分",
    price: "¥7,700〜",
    desc: "西洋式の基本技法を用いた全身マッサージ。血行促進・筋肉疲労の回復に優れ、初めての方にも最適なコースです。",
    tag: "初回割引あり",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    name: "ヘッド＆ネックリリース",
    duration: "45 / 60分",
    price: "¥5,500〜",
    desc: "頭皮・首・肩の緊張を集中的にほぐします。デスクワークや長時間のスマートフォン使用による疲れに対応したコースです。",
    tag: "短時間で効果的",
  },
];

const testimonials = [
  {
    name: "田中 美咲",
    age: "34歳・会社員",
    rating: 5,
    text: "毎月通っています。アロマトリートメントを受けるたびに、肩こりが嘘のように楽になります。スタッフの方々も丁寧で、空間も落ち着いていて最高のリラックスタイムです。",
    avatar: "T",
  },
  {
    name: "佐藤 健一",
    age: "42歳・エンジニア",
    rating: 5,
    text: "ホットストーンマッサージを初めて体験しました。深部まで温まる感覚が今まで経験したことのないものでした。翌日の体の軽さに驚いています。",
    avatar: "S",
  },
  {
    name: "山本 由香",
    age: "28歳・デザイナー",
    rating: 5,
    text: "内装がとても素敵で、入った瞬間から別世界に来たような気分になります。施術の質も高く、友人にも強くおすすめしています。",
    avatar: "Y",
  },
  {
    name: "鈴木 誠",
    age: "51歳・経営者",
    rating: 5,
    text: "出張の疲れを癒しに来ています。予約が取りやすく、時間通りに施術が始まるのもビジネスマンとしてありがたいです。",
    avatar: "S",
  },
];

const plans = [
  {
    name: "トライアル",
    label: "初回限定",
    price: "¥5,500",
    unit: "60分",
    color: "bg-[oklch(0.93_0.015_75)]",
    features: ["アロマ or スウェーデン式", "施術前カウンセリング", "ハーブティー1杯"],
    cta: "予約する",
    highlight: false,
  },
  {
    name: "スタンダード",
    label: "定番コース",
    price: "¥8,800",
    unit: "60分〜",
    color: "bg-[oklch(0.56_0.12_38)]",
    features: ["全コース選択可", "施術前後カウンセリング", "ハーブティー＋軽食", "次回予約割引5%"],
    cta: "予約する",
    highlight: true,
  },
  {
    name: "プレミアム",
    label: "贅沢コース",
    price: "¥15,000",
    unit: "120分",
    color: "bg-[oklch(0.93_0.015_75)]",
    features: ["ホットストーン込み", "フルボディ＋ヘッド", "アロマオイル持参可", "個室完全貸切", "送迎サービス（要相談）"],
    cta: "予約する",
    highlight: false,
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "サービス", href: "#services" },
    { label: "料金", href: "#pricing" },
    { label: "お客様の声", href: "#reviews" },
    { label: "アクセス", href: "#access" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.98_0.012_75)]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-[oklch(0.56_0.12_38)]" />
          <span
            className="text-lg font-medium tracking-wide"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            癒しの手
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[oklch(0.40_0.02_55)] hover:text-[oklch(0.56_0.12_38)] transition-colors duration-200 tracking-wide"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <a href="#booking">
            <Button
              size="sm"
              className="bg-[oklch(0.56_0.12_38)] hover:bg-[oklch(0.50_0.12_38)] text-white rounded-full px-6"
            >
              予約する
            </Button>
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-[oklch(0.40_0.02_55)]"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[oklch(0.98_0.012_75)] border-t border-[oklch(0.88_0.02_75)] px-6 py-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-sm text-[oklch(0.40_0.02_55)] py-2"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)}>
            <Button className="w-full bg-[oklch(0.56_0.12_38)] hover:bg-[oklch(0.50_0.12_38)] text-white rounded-full">
              予約する
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden" style={{ background: 'oklch(0.22 0.02 55)' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="癒しの手 施術室"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient overlay — light image → dark text on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.02_55)]/80 via-[oklch(0.12_0.02_55)]/40 to-[oklch(0.12_0.02_55)]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.02_55)]/60 via-transparent to-transparent" />
      </div>

      <div className="relative container">
        <div className="max-w-xl">
          <p
            className="text-[oklch(0.85_0.08_75)] text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Premium Massage Salon — Shibuya, Tokyo
          </p>
          <h1
            className="text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            心と体に、
            <br />
            <em className="not-italic text-[oklch(0.85_0.08_75)]">深い癒し</em>を。
          </h1>
          <p
            className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-md"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            東京・渋谷の隠れ家サロン「癒しの手」。
            熟練セラピストによる本格的なボディケアで、
            日常の疲れを根本からほぐします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking">
              <Button
                size="lg"
                className="bg-[oklch(0.56_0.12_38)] hover:bg-[oklch(0.50_0.12_38)] text-white rounded-full px-8 h-14 text-base"
              >
                無料カウンセリングを予約
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-white hover:bg-white/10 rounded-full px-8 h-14 text-base bg-transparent"
              >
                サービスを見る
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
            {[
              { num: "2,400+", label: "累計来店数" },
              { num: "98%", label: "顧客満足度" },
              { num: "10年", label: "施術経験" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-2xl text-white font-medium"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {s.num}
                </p>
                <p className="text-white/60 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest rotate-90 mb-2">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, inView } = useInView();
  return (
    <section className="py-24 md:py-36 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image side */}
          <div
            ref={ref}
            className={`relative transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <img
                src={INTERIOR_IMG}
                alt="サロン内装"
                className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 w-44">
                <p
                  className="text-3xl text-[oklch(0.56_0.12_38)]"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  10年
                </p>
                <p className="text-xs text-[oklch(0.52_0.02_65)] mt-1 leading-snug">
                  渋谷で愛される
                  <br />
                  プレミアムサロン
                </p>
              </div>
              {/* Decorative blob */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[oklch(0.88_0.04_145)]/40 blob-shape -z-10" />
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-[oklch(0.56_0.12_38)] text-sm tracking-[0.25em] uppercase mb-4">
              About Us
            </p>
            <h2
              className="text-4xl md:text-5xl text-[oklch(0.22_0.02_55)] leading-tight mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              自然の力で、
              <br />
              本来の輝きを
              <br />
              取り戻す場所
            </h2>
            <p className="text-[oklch(0.40_0.02_55)] leading-relaxed mb-6 text-sm md:text-base">
              「癒しの手」は2015年、渋谷の静かな一角に誕生しました。
              忙しい都市生活の中で、本当の意味での休息を提供したいという想いから、
              厳選した天然素材と熟練セラピストによる施術をご提供しています。
            </p>
            <p className="text-[oklch(0.40_0.02_55)] leading-relaxed mb-8 text-sm md:text-base">
              スカンジナビアのウェルネス哲学と日本の「おもてなし」の精神を融合させた
              空間で、心と体の深いリラクゼーションをお届けします。
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Leaf className="w-4 h-4" />, text: "天然オーガニックオイル使用" },
                { icon: <Star className="w-4 h-4" />, text: "認定セラピスト在籍" },
                { icon: <Droplets className="w-4 h-4" />, text: "完全個室プライベート空間" },
                { icon: <Clock className="w-4 h-4" />, text: "年中無休・夜22時まで営業" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[oklch(0.88_0.04_145)]/40 flex items-center justify-center text-[oklch(0.42_0.08_145)] flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs text-[oklch(0.40_0.02_55)]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, inView } = useInView();
  return (
    <section id="services" className="py-24 md:py-36 bg-[oklch(0.96_0.015_75)]">
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-800 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[oklch(0.56_0.12_38)] text-sm tracking-[0.25em] uppercase mb-3">
            Our Services
          </p>
          <h2
            className="text-4xl md:text-5xl text-[oklch(0.22_0.02_55)]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            施術メニュー
          </h2>
          <p className="text-[oklch(0.52_0.02_65)] mt-4 max-w-md mx-auto text-sm">
            お客様の体の状態やご要望に合わせて、最適なコースをご提案いたします。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.name} service={s} delay={i * 100} />
          ))}
        </div>

        {/* Treatment image */}
        <div className="mt-16 relative rounded-3xl overflow-hidden h-64 md:h-96">
          <img
            src={TREATMENT_IMG}
            alt="施術の様子"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.02_55)]/60 to-transparent flex items-center">
            <div className="px-10 md:px-16">
              <p className="text-white/70 text-sm tracking-widest uppercase mb-2">
                Experience
              </p>
              <h3
                className="text-3xl md:text-4xl text-white"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                プロの手で、
                <br />
                深い癒しを体験
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[0];
  delay: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 group ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-[oklch(0.93_0.015_75)] flex items-center justify-center text-[oklch(0.56_0.12_38)] group-hover:bg-[oklch(0.56_0.12_38)] group-hover:text-white transition-colors duration-300">
          {service.icon}
        </div>
        <span className="text-xs bg-[oklch(0.88_0.04_145)]/60 text-[oklch(0.32_0.06_145)] px-3 py-1 rounded-full">
          {service.tag}
        </span>
      </div>
      <h3
        className="text-xl text-[oklch(0.22_0.02_55)] mb-2"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        {service.name}
      </h3>
      <p className="text-[oklch(0.52_0.02_65)] text-sm leading-relaxed mb-4">
        {service.desc}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-[oklch(0.93_0.015_75)]">
        <span className="text-xs text-[oklch(0.60_0.02_65)]">{service.duration}</span>
        <span
          className="text-lg text-[oklch(0.56_0.12_38)]"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {service.price}
        </span>
      </div>
    </div>
  );
}

function PricingSection() {
  const { ref, inView } = useInView();
  return (
    <section id="pricing" className="py-24 md:py-36">
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-800 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[oklch(0.56_0.12_38)] text-sm tracking-[0.25em] uppercase mb-3">
            Pricing
          </p>
          <h2
            className="text-4xl md:text-5xl text-[oklch(0.22_0.02_55)]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            料金プラン
          </h2>
          <p className="text-[oklch(0.52_0.02_65)] mt-4 max-w-md mx-auto text-sm">
            初めての方も通い続けるお客様も、ご満足いただける価格設定です。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} delay={i * 100} />
          ))}
        </div>

        <p className="text-center text-xs text-[oklch(0.60_0.02_65)] mt-8">
          ※ 表示価格はすべて税込です。初回限定価格は1回のみ適用されます。
        </p>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  delay,
}: {
  plan: (typeof plans)[0];
  delay: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`rounded-2xl overflow-hidden transition-all duration-700 ${
        plan.highlight ? "shadow-2xl scale-105" : "shadow-sm"
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div
        className={`${plan.highlight ? "bg-[oklch(0.56_0.12_38)]" : "bg-[oklch(0.93_0.015_75)]"} p-6`}
      >
        <span
          className={`text-xs px-3 py-1 rounded-full ${
            plan.highlight
              ? "bg-white/20 text-white"
              : "bg-[oklch(0.88_0.02_75)] text-[oklch(0.52_0.02_65)]"
          }`}
        >
          {plan.label}
        </span>
        <h3
          className={`text-2xl mt-3 ${plan.highlight ? "text-white" : "text-[oklch(0.22_0.02_55)]"}`}
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {plan.name}
        </h3>
        <div className="flex items-baseline gap-1 mt-2">
          <span
            className={`text-4xl ${plan.highlight ? "text-white" : "text-[oklch(0.56_0.12_38)]"}`}
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {plan.price}
          </span>
          <span
            className={`text-sm ${plan.highlight ? "text-white/70" : "text-[oklch(0.60_0.02_65)]"}`}
          >
            / {plan.unit}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white p-6 flex flex-col gap-3">
        {plan.features.map((f) => (
          <div key={f} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[oklch(0.88_0.04_145)]/50 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-[oklch(0.42_0.08_145)]" fill="none" viewBox="0 0 12 12">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-sm text-[oklch(0.40_0.02_55)]">{f}</span>
          </div>
        ))}
        <a href="#booking" className="mt-4">
          <Button
            className={`w-full rounded-full ${
              plan.highlight
                ? "bg-[oklch(0.56_0.12_38)] hover:bg-[oklch(0.50_0.12_38)] text-white"
                : "bg-[oklch(0.93_0.015_75)] hover:bg-[oklch(0.88_0.02_75)] text-[oklch(0.30_0.04_55)]"
            }`}
          >
            {plan.cta}
          </Button>
        </a>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const { ref, inView } = useInView();
  return (
    <section id="reviews" className="py-24 md:py-36 bg-[oklch(0.96_0.015_75)] overflow-hidden">
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-800 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[oklch(0.56_0.12_38)] text-sm tracking-[0.25em] uppercase mb-3">
            Reviews
          </p>
          <h2
            className="text-4xl md:text-5xl text-[oklch(0.22_0.02_55)]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            お客様の声
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[oklch(0.75_0.12_75)] text-[oklch(0.75_0.12_75)]" />
            ))}
            <span className="text-sm text-[oklch(0.52_0.02_65)] ml-2">4.9 / 5.0（Google 口コミ）</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: (typeof testimonials)[0];
  delay: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 shadow-sm transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[oklch(0.75_0.12_75)] text-[oklch(0.75_0.12_75)]" />
        ))}
      </div>
      <p className="text-[oklch(0.35_0.02_55)] text-sm leading-relaxed mb-6">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[oklch(0.56_0.12_38)] flex items-center justify-center text-white text-sm font-medium">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-[oklch(0.22_0.02_55)]">{testimonial.name}</p>
          <p className="text-xs text-[oklch(0.60_0.02_65)]">{testimonial.age}</p>
        </div>
      </div>
    </div>
  );
}

function AromaSection() {
  const { ref, inView } = useInView();
  return (
    <section className="py-24 md:py-36">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
            className={`transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-[oklch(0.56_0.12_38)] text-sm tracking-[0.25em] uppercase mb-4">
              Natural Ingredients
            </p>
            <h2
              className="text-4xl md:text-5xl text-[oklch(0.22_0.02_55)] leading-tight mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              自然の恵みを
              <br />
              贅沢に使用
            </h2>
            <p className="text-[oklch(0.40_0.02_55)] leading-relaxed mb-6 text-sm">
              当サロンでは、フランス・プロヴァンス産のラベンダー、
              オーストラリア産のユーカリ、モロッコ産のアルガンオイルなど、
              世界各地から厳選した天然素材のみを使用しています。
            </p>
            <p className="text-[oklch(0.40_0.02_55)] leading-relaxed text-sm">
              合成香料・パラベン・鉱物油は一切使用しておりません。
              敏感肌の方も安心してお受けいただけます。
            </p>
          </div>
          <div
            ref={ref}
            className={`relative transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <img
              src={AROMA_IMG}
              alt="アロマオイルと天然素材"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[oklch(0.56_0.12_38)]/20 blob-shape" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ご予約ありがとうございます！確認のご連絡をお送りします。（デモ）");
  };

  return (
    <section id="booking" className="py-24 md:py-36 bg-[oklch(0.22_0.02_55)]">
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-800 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[oklch(0.75_0.08_75)] text-sm tracking-[0.25em] uppercase mb-3">
            Reservation
          </p>
          <h2
            className="text-4xl md:text-5xl text-white"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            ご予約・お問い合わせ
          </h2>
          <p className="text-white/60 mt-4 max-w-md mx-auto text-sm">
            お電話またはフォームよりお気軽にご連絡ください。
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/70 text-xs mb-2">お名前 *</label>
                <input
                  type="text"
                  required
                  placeholder="山田 花子"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[oklch(0.75_0.08_75)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs mb-2">電話番号 *</label>
                <input
                  type="tel"
                  required
                  placeholder="090-0000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[oklch(0.75_0.08_75)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs mb-2">ご希望日 *</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[oklch(0.75_0.08_75)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs mb-2">ご希望時間 *</label>
                <select
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[oklch(0.75_0.08_75)] transition-colors"
                >
                  <option value="" className="text-black">選択してください</option>
                  {["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"].map(
                    (t) => (
                      <option key={t} value={t} className="text-black">
                        {t}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-white/70 text-xs mb-2">ご希望コース</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[oklch(0.75_0.08_75)] transition-colors"
              >
                <option value="" className="text-black">未定・相談したい</option>
                {services.map((s) => (
                  <option key={s.name} value={s.name} className="text-black">
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-6">
              <label className="block text-white/70 text-xs mb-2">ご要望・ご質問</label>
              <textarea
                rows={4}
                placeholder="体の気になる部位、アレルギーなどがあればお知らせください。"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[oklch(0.75_0.08_75)] transition-colors resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full mt-8 bg-[oklch(0.56_0.12_38)] hover:bg-[oklch(0.50_0.12_38)] text-white rounded-full h-14 text-base"
            >
              予約リクエストを送る
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  return (
    <section id="access" className="py-24 md:py-36">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="text-[oklch(0.56_0.12_38)] text-sm tracking-[0.25em] uppercase mb-4">
              Access
            </p>
            <h2
              className="text-4xl md:text-5xl text-[oklch(0.22_0.02_55)] mb-8"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              アクセス
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[oklch(0.93_0.015_75)] flex items-center justify-center text-[oklch(0.56_0.12_38)] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[oklch(0.22_0.02_55)] mb-1">所在地</p>
                  <p className="text-sm text-[oklch(0.52_0.02_65)]">
                    〒150-0002
                    <br />
                    東京都渋谷区渋谷1-2-3 ウェルネスビル5F
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[oklch(0.93_0.015_75)] flex items-center justify-center text-[oklch(0.56_0.12_38)] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[oklch(0.22_0.02_55)] mb-1">営業時間</p>
                  <p className="text-sm text-[oklch(0.52_0.02_65)]">
                    月〜金：10:00 〜 22:00
                    <br />
                    土・日・祝：9:00 〜 21:00
                    <br />
                    <span className="text-[oklch(0.56_0.12_38)]">年中無休</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[oklch(0.93_0.015_75)] flex items-center justify-center text-[oklch(0.56_0.12_38)] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[oklch(0.22_0.02_55)] mb-1">電話番号</p>
                  <p className="text-sm text-[oklch(0.52_0.02_65)]">
                    03-0000-0000
                    <br />
                    <span className="text-xs">（受付：9:00〜21:00）</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-[oklch(0.93_0.015_75)] rounded-2xl">
              <p className="text-sm font-medium text-[oklch(0.22_0.02_55)] mb-2">アクセス方法</p>
              <ul className="text-sm text-[oklch(0.52_0.02_65)] space-y-1">
                <li>・JR渋谷駅 ハチ公口より徒歩5分</li>
                <li>・東京メトロ渋谷駅 B1出口より徒歩3分</li>
                <li>・東急東横線 渋谷駅より徒歩4分</li>
              </ul>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden h-80 md:h-[480px] bg-[oklch(0.93_0.015_75)] relative flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[oklch(0.56_0.12_38)] mx-auto mb-3" />
              <p className="text-[oklch(0.52_0.02_65)] text-sm">
                東京都渋谷区渋谷1-2-3
                <br />
                ウェルネスビル5F
              </p>
              <a
                href="https://maps.google.com/?q=渋谷区渋谷1-2-3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-[oklch(0.56_0.12_38)] text-[oklch(0.56_0.12_38)] hover:bg-[oklch(0.56_0.12_38)] hover:text-white"
                >
                  Google マップで開く
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.02_55)] text-white/60 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-[oklch(0.75_0.08_75)]" />
              <span
                className="text-lg text-white"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                癒しの手
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              東京・渋谷のプレミアムマッサージサロン。
              自然の力と熟練の技で、心と体の深い癒しをお届けします。
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[oklch(0.56_0.12_38)] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white text-sm font-medium mb-4">メニュー</p>
            <ul className="space-y-2 text-sm">
              {["アロマトリートメント", "ホットストーン", "スウェーデン式", "ヘッド＆ネック"].map(
                (item) => (
                  <li key={item}>
                    <a href="#services" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="text-white text-sm font-medium mb-4">情報</p>
            <ul className="space-y-2 text-sm">
              {["料金プラン", "お客様の声", "アクセス", "プライバシーポリシー", "特定商取引法"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2025 癒しの手 All rights reserved.</p>
          <p className="text-xs">東京都渋谷区渋谷1-2-3 ウェルネスビル5F</p>
        </div>
      </div>
    </footer>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <AromaSection />
      <BookingSection />
      <AccessSection />
      <Footer />
    </div>
  );
}
