const posts = [
  {
    id: 1,
    format: 'Чек-лист',
    emoji: '✅',
    title: 'Аудит ИТ-затрат',
    teaser: 'Нахожу 20–30% бюджета, которые можно сократить без потери качества — опираясь на мой опыт реального сокращения на 30%.',
    tags: ['IT-бюджет', 'оптимизация', 'CIO'],
  },
  {
    id: 3,
    format: 'Шаблон',
    emoji: '📋',
    title: 'Шаблон ТЗ на интеграцию SCADA и 1С — скачайте и адаптируйте',
    teaser: 'Именно этот документ помог нам автоматизировать сбор данных со станков с ЧПУ и повысить точность себестоимости на 25%. Отдаю бесплатно.',
    tags: ['1С', 'SCADA', 'шаблон'],
  },
  {
    id: 4,
    format: 'Гайд',
    emoji: '📊',
    title: 'BI-дашборд для холдинга: как объединить 4 предприятия в одну картину',
    teaser: 'Раньше консолидация занимала 2 недели. Теперь — один клик. Рассказываю архитектуру, инструменты и ошибки, которые мы прошли.',
    tags: ['BI', 'аналитика', 'холдинг'],
  },
  {
    id: 5,
    format: 'Разбор',
    emoji: '🤖',
    title: 'AI в управлении IT-проектами: что реально работает, а что — хайп',
    teaser: 'Прошёл курс, протестировал 12 инструментов. Оставил 3. Показываю, где AI реально экономит время руководителя проекта, а где только мешает.',
    tags: ['AI', 'управление проектами', 'инструменты'],
  },
];

export default function ContentSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 border-b border-slate-200 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Telegram-канал
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              О чём пишу в «Автопилот для бизнеса»
            </h2>
            <p className="max-w-xl text-base text-slate-500">
              Только прикладной инструментарий — шаблоны, чек-листы, разборы. То, что можно взять и применить сегодня.
            </p>
          </div>
          <a
            href="https://t.me/autopilot_for_business"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 md:mt-0"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.277-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Подписаться
          </a>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://t.me/autopilot_for_business"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  <span>{post.emoji}</span>
                  {post.format}
                </span>
                <svg
                  className="h-4 w-4 text-slate-300 transition-colors group-hover:text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <h3 className="text-base font-semibold leading-snug text-slate-900 group-hover:text-blue-700 md:text-lg">
                {post.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-500">{post.teaser}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-blue-500">#{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          Новые материалы выходят каждую неделю — подпишитесь, чтобы не пропустить
        </p>
      </div>
    </section>
  );
}