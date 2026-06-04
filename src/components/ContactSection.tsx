import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Новая заявка с сайта:\n\nИмя: ${form.name}\nКомпания: ${form.company}\nСообщение: ${form.message}`;
    window.open(`https://t.me/autopilot_for_business?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  return (
    <section className="bg-[#080808] py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Контакт
              </p>
              <h2 className="text-3xl font-light text-white md:text-4xl">
                Обсудим вашу задачу
              </h2>
              <p className="text-base leading-relaxed text-white/50">
                Оставьте заявку — отвечу в течение 24 часов. Расскажите, с чем столкнулись, и я предложу конкретный первый шаг.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-lg">
                  💬
                </div>
                <div>
                  <p className="text-sm text-white">Telegram-канал</p>
                  <a
                    href="https://t.me/autopilot_for_business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300"
                  >
                    @autopilot_for_business
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-lg">
                  🕐
                </div>
                <div>
                  <p className="text-sm text-white">Время ответа</p>
                  <p className="text-xs text-white/40">в течение 24 часов</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex flex-col gap-6">
            {sent ? (
              <div className="flex flex-col items-start gap-4 border border-white/10 p-10">
                <span className="text-4xl">✅</span>
                <h3 className="text-xl font-light text-white">Спасибо, заявка отправлена!</h3>
                <p className="text-sm text-white/50">Отвечу в Telegram в течение 24 часов.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs text-blue-400 hover:text-blue-300"
                >
                  Отправить ещё одну →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/30">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Петров"
                    className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-white/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/30">Компания</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="ООО «Ваш бизнес»"
                    className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-white/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/30">С чем хотите разобраться?</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Кратко опишите задачу или вопрос — что болит прямо сейчас?"
                    className="resize-none border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-white/30"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 border border-white bg-white py-3 text-sm font-semibold text-black transition-all hover:bg-transparent hover:text-white"
                >
                  Отправить заявку →
                </button>
                <p className="text-xs text-white/20">
                  Нажимая кнопку, вы соглашаетесь на обработку данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
