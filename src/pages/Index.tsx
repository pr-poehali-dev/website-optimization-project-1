import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="text-lg md:text-2xl font-bold">Работа курьером</div>
            <nav className="hidden md:flex gap-6">
              <a href="#benefits" className="hover:text-primary transition-colors">
                Преимущества
              </a>
              <a href="#how-to" className="hover:text-primary transition-colors">
                Как стать курьером?
              </a>
              <a href="#faq" className="hover:text-primary transition-colors">
                Частые вопросы
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <a href="tel:+79250334432" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="Phone" size={18} className="md:w-5 md:h-5" />
              <span className="hidden sm:inline text-sm md:text-base font-semibold">+7 (925) 033-44-32</span>
            </a>
            <a 
              href="https://t.me/madaot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-[#0088cc] hover:bg-[#0088cc]/90 text-white rounded-lg transition-colors text-xs md:text-base font-semibold"
            >
              <Icon name="MessageCircle" size={18} className="md:w-5 md:h-5" />
              <span className="hidden sm:inline">Напишите нам</span>
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 text-black font-semibold text-xs md:text-base px-3 py-2 md:px-4 md:py-2"
              asChild
            >
              <a href="https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=ec3aa0a8cbe04ac281c47209662f2f1c&utm_content=blank" target="_blank" rel="noopener noreferrer">
                Отправить заявку
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ищем курьера, который хочет зарабатывать до{" "}
                <span className="text-primary">850₽ в час</span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground">
                Работайте в качестве самозанятого или курьера-партнёра сервиса Яндекс.Еда.
                <br className="hidden md:block" />
                Зарабатывайте до 8 000₽ в день*
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black font-semibold text-base md:text-lg px-6 py-5 md:px-8 md:py-6 w-full md:w-auto"
                asChild
              >
                <a href="https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=ec3aa0a8cbe04ac281c47209662f2f1c&utm_content=blank" target="_blank" rel="noopener noreferrer">
                  Стать курьером
                </a>
              </Button>
            </div>
            <div className="relative animate-fade-in order-first md:order-last">
              <img
                src="https://cdn.poehali.dev/files/c510f463-1f12-4555-baf8-7b66e2da412d.png"
                alt="Курьер Яндекс.Еда"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
            Почему Яндекс Еда?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            <Card className="p-6 md:p-8 bg-[hsl(var(--cyan-card))] border-0 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="text-5xl md:text-6xl">💰</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Стабильный ежедневный доход</h3>
                  <p className="text-base md:text-lg">
                    Зарабатывайте до 850 руб. в час, в месяц до 120 тыс.
                    Больше доставок, больше доход.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-[hsl(var(--pink-card))] border-0 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="text-5xl md:text-6xl">⚙️</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Подработка</h3>
                  <p className="text-base md:text-lg">
                    Совмещайте с основной работой, или учёбой, берите дополнительные заказы в свободное время.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 md:p-8 bg-[hsl(var(--green-card))] border-0 mb-4 md:mb-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="text-5xl md:text-6xl">📅</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Полностью свободный график</h3>
                <p className="text-base md:text-lg">
                  Выходите на смену, когда удобно вам. Работайте от 1 часа, до 12 часов, вы сами выбираете сколько часов работать.
                  Любой район на выбор, можно работать в своём районе.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <Card className="p-6 md:p-8 bg-[hsl(var(--peach-card))] border-0 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">🔥</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Скидки для курьеров</h3>
              <p className="text-sm md:text-base">
                При заказе еды в ресторанах-партнерах и Яндекс.Лавке предоставляется скидка до 50%
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-[hsl(var(--pink-card))] border-0 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">🚲</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Доставка на чем угодно</h3>
              <p className="text-sm md:text-base">
                Доставляйте заказы пешком, на велосипеде, самокате или собственном автомобиле.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-[hsl(var(--cyan-card))] border-0 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">💵</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Высокий доход и чаевые</h3>
              <p className="text-sm md:text-base">
                Получайте доплаты за заказы. Чаевые за заказы полностью ваши.
              </p>
            </Card>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-semibold text-base md:text-lg px-6 py-5 md:px-8 md:py-6 w-full md:w-auto"
              asChild
            >
              <a href="https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=ec3aa0a8cbe04ac281c47209662f2f1c&utm_content=blank" target="_blank" rel="noopener noreferrer">
                Стать курьером
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="how-to" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
            Как стать курьером?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-3 md:space-y-4">
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 md:mb-6">
                <img
                  src="https://cdn.poehali.dev/files/aee5ca3d-7879-4e84-8b20-f92005dc0041.png"
                  alt="Оставьте заявку"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Оставьте заявку</h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Нажмите на кнопку "стать курьером", или "оставить заявку"
              </p>
            </div>

            <div className="text-center space-y-3 md:space-y-4 md:mt-12">
              <Icon name="ArrowRight" className="mx-auto text-primary hidden md:block" size={32} />
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 md:mb-6">
                <div className="text-6xl md:text-8xl">📱</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Дождитесь звонка</h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Мы с вами свяжемся, и расскажем что нужно для оформления
              </p>
            </div>

            <div className="text-center space-y-3 md:space-y-4 md:mt-24">
              <Icon name="ArrowRight" className="mx-auto text-primary hidden md:block" size={32} />
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 md:mb-6">
                <div className="text-6xl md:text-8xl">🛵</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Выходите на смену</h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Для этого нужно будет установить приложение и получить сумку. в офисе мы ответим на все ваши вопросы.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-semibold text-base md:text-lg px-6 py-5 md:px-8 md:py-6 w-full md:w-auto"
              asChild
            >
              <a href="https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=ec3aa0a8cbe04ac281c47209662f2f1c&utm_content=blank" target="_blank" rel="noopener noreferrer">
                Отправить заявку
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
            Часто задаваемые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border px-4 md:px-6">
              <AccordionTrigger className="text-base md:text-xl font-semibold hover:no-underline py-4">
                Можно ли стать курьером, если мне нет 18 лет?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg text-muted-foreground">
                Стать курьером-партнером Яндекс Еды можно, если вам есть 18 лет.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border px-4 md:px-6">
              <AccordionTrigger className="text-base md:text-xl font-semibold hover:no-underline py-4">
                Можно ли доставлять заказы на велосипеде, самокате или только пешком?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg text-muted-foreground">
                Вы можете выполнять заказы не только пешком. Если вы хорошо управляетесь с велосипедом, самокатом, роликами и другими средствами передвижения — используйте их. Так выполнять доставки можно быстрее, а значит, и доход будет выше. Главное, будьте аккуратны и помните о правилах дорожного движения. На покупку и ремонт велосипедов и самокатов можно будет получить скидки до 50% у партнёров.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border px-4 md:px-6">
              <AccordionTrigger className="text-base md:text-xl font-semibold hover:no-underline py-4">
                Можно ли выполнять заказы по выходным?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg text-muted-foreground">
                Да, вы сами выбираете когда выполнять заказы и район доставки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border px-4 md:px-6">
              <AccordionTrigger className="text-base md:text-xl font-semibold hover:no-underline py-4">
                Сколько заказов выполняет курьер за час?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg text-muted-foreground">
                2-4 Заказа, иногда бывают "мультизаказы"
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg border px-4 md:px-6">
              <AccordionTrigger className="text-base md:text-xl font-semibold hover:no-underline py-4">
                У меня есть основная работа, могу ли я выполнять заказы в свободное время?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg text-muted-foreground">
                Да, обычно курьеры могут совмещать основную работу с подработкой у партнёра сервиса Яндекс Еда.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg border px-4 md:px-6">
              <AccordionTrigger className="text-base md:text-xl font-semibold hover:no-underline py-4">
                Оплачивается ли курьером проезд на общественном транспорте?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg text-muted-foreground">
                Обычно определённая сумма на проезд входит в фиксированную сумму дохода.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg border px-4 md:px-6">
              <AccordionTrigger className="text-base md:text-xl font-semibold hover:no-underline py-4">
                Выдают ли форму?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg text-muted-foreground">
                Курьерская служба предоставит вам жёлтую одежду с логотипом сервиса после начала сотрудничества. Не забывайте надевать её на заказы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg border px-4 md:px-6">
              <AccordionTrigger className="text-base md:text-xl font-semibold hover:no-underline py-4">
                Можно ли получить оплату ежедневно?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg text-muted-foreground">
                Да, можно. Условия сотрудничества для прямых курьеров-партнёров в статусе самозанятых предусматривают ежедневные выплаты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg border px-4 md:px-6">
              <AccordionTrigger className="text-base md:text-xl font-semibold hover:no-underline py-4">
                Есть ли страхование во время заказов?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg text-muted-foreground">
                Да — страховое возмещение можно получить в случае серьёзных травм, которые случились с вами во время работы.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-black">
              Готовы начать зарабатывать?
            </h2>
            <p className="text-base md:text-xl text-black/80">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          
          <Card className="p-6 md:p-8">
            <div className="space-y-4 md:space-y-6">
              <p className="text-center text-base md:text-lg text-muted-foreground">
                Нажмите кнопку ниже, чтобы перейти на страницу регистрации Яндекс.Еда
              </p>
              <Button 
                size="lg" 
                className="w-full bg-black hover:bg-black/90 text-white font-semibold text-base md:text-lg py-5 md:py-6"
                asChild
              >
                <a href="https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=ec3aa0a8cbe04ac281c47209662f2f1c&utm_content=blank" target="_blank" rel="noopener noreferrer">
                  Отправить заявку
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-20 relative overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/66857a8d-e1f4-4db9-98da-ef5c7f6aa2dd/files/77876231-c011-4131-96a9-5099a3a50dfb.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/70 to-gray-900/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg">
            Присоединяйтесь к самой большой команде курьеров
          </h2>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 drop-shadow-md">
            И зарабатывай до 850 рублей в час.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-black font-semibold text-base md:text-lg px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto shadow-2xl"
            asChild
          >
            <a href="https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=ec3aa0a8cbe04ac281c47209662f2f1c&utm_content=blank" target="_blank" rel="noopener noreferrer">
              Стать курьером
            </a>
          </Button>
        </div>
      </section>

      <section id="contacts" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
            Контакты
          </h2>
          <div className="max-w-md mx-auto">
            <Card className="p-6 md:p-8">
              <Icon name="Phone" className="mx-auto mb-3 md:mb-4 text-primary" size={40} />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Свяжитесь с нами</h3>
              <a 
                href="tel:+79250334432" 
                className="text-2xl md:text-3xl font-semibold text-primary hover:underline block"
              >
                +7 (925) 033-44-32
              </a>
              <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4">
                Звоните с 9:00 до 21:00
              </p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-300 mb-2">
              © 2025, Официальный партнер Яндекс Еда
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4 text-sm text-gray-400">
            <p>
              18+ лет. Сотрудничество с организациями, оказывающими услуги по доставке заказов, оформленных с помощью сервиса Яндекс Еда.
            </p>
            <p>
              *Указаны средние показатели. Условия дохода и результаты индивидуальны и могут отличаться от указанных в зависимости от города, количества выполненных заказов и прочих условий. Работа в качестве курьера-партнёра сервиса Яндекс Еда или как самозанятый. Чтобы узнать подробную информацию отправьте заявку.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;