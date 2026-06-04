import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/b40c8051-801f-49dd-95a0-b162e6becd87/files/4977b032-6210-42ee-8a1c-71e8e0e8ee35.jpg',
  'https://cdn.poehali.dev/projects/b40c8051-801f-49dd-95a0-b162e6becd87/files/6aad34d9-e4bb-458f-a1b8-d252cb30799a.jpg',
  'https://cdn.poehali.dev/projects/b40c8051-801f-49dd-95a0-b162e6becd87/files/8476b635-8a8a-41d4-a980-cde542ebf9d4.jpg',
  'https://cdn.poehali.dev/projects/b40c8051-801f-49dd-95a0-b162e6becd87/files/89f20369-760c-4946-b70a-f2c6f3461844.jpg',
];

const stats = [
  { value: '17+', label: 'лет в IT и цифровизации' },
  { value: '30%', label: 'сокращение IT-затрат' },
  { value: '4', label: 'предприятия в единой платформе данных' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-white/30 shadow-2xl md:h-56 md:w-56">
                <img
                  src="https://cdn.poehali.dev/projects/b40c8051-801f-49dd-95a0-b162e6becd87/bucket/ec57611a-f53b-4640-918e-d5fd17aaffed.jpg"
                  alt="Иванова Наталья — Директор по цифровизации"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-5">
                {/* Tagline */}
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Автопилот для бизнеса
                </p>

                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Иванова Наталья
                </p>
                <p className="text-lg font-light text-white/50 md:text-xl">
                  Директор по цифровизации
                </p>
                <p className="text-lg font-light leading-relaxed text-white/70 md:text-xl">
                  Помогаю бизнесу расти без раздутых IT-бюджетов — через 1С ERP, BI-аналитику и автоматизацию на AI
                </p>

                {/* Stats */}
                <div
                  className={cn(
                    'flex flex-wrap gap-8 pt-2 transform transition-all duration-1000 delay-500 ease-out',
                    isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  )}
                >
                  {stats.map((stat) => (
                    <div key={stat.value} className="flex flex-col gap-0.5">
                      <span className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</span>
                      <span className="text-xs text-white/50">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA + Social */}
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <a
                    href="https://t.me/autopilot_for_business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-none border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-transparent hover:text-white"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Подписаться на канал
                  </a>

                  <div className="flex gap-4">
                    <a
                      href="https://t.me/autopilot_for_business"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 transition-colors hover:text-white"
                      aria-label="Telegram"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: key expertise tags */}
      <div
        className={cn(
          'absolute bottom-16 left-8 z-20 flex flex-wrap gap-2 md:left-16 transform transition-all duration-1000 delay-700 ease-out',
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        )}
      >
        {['1С ERP', 'BI-аналитика', 'AI в управлении', 'SCADA + 1С', 'Цифровая трансформация'].map((tag) => (
          <span
            key={tag}
            className="border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/60 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}