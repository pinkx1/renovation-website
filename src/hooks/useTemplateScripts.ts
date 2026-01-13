import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type SwiperInstance = {
  destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void;
};

type SwiperConstructor = new (
  element: Element,
  options: Record<string, unknown>
) => SwiperInstance;

type LenisInstance = {
  raf: (time: number) => void;
  destroy?: () => void;
};

type LenisConstructor = new (options: Record<string, unknown>) => LenisInstance;

type UkiyoInstance = {
  animate?: () => void;
  destroy?: () => void;
};

type UkiyoConstructor = new (
  selector: string,
  options: Record<string, unknown>
) => UkiyoInstance;

type TemplateWindow = Window &
  typeof globalThis & {
    Swiper?: SwiperConstructor;
    Lenis?: LenisConstructor;
    Ukiyo?: UkiyoConstructor;
    scrollCue?: { init: () => void };
    bootstrap?: { Modal?: { getInstance: (element: Element) => { hide: () => void } | null } };
  };

const SCROLL_OFFSET = 200;

export default function useTemplateScripts() {
  const location = useLocation();

  useEffect(() => {
    const w = window as TemplateWindow;
    const doc = document;
    const navbar = doc.getElementById('navbar');
    const backToTop = doc.getElementById('backtotop');
    const preloader = doc.getElementById('preloader');

    const onScroll = () => {
      const scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;

      if (navbar) {
        navbar.classList.toggle('sticky', scrollTop >= SCROLL_OFFSET);
      }

      if (backToTop) {
        backToTop.style.opacity = scrollTop >= SCROLL_OFFSET ? '1' : '0';
      }
    };

    if (navbar || backToTop) {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    const onBackToTopClick = (event: Event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (backToTop) {
      backToTop.addEventListener('click', onBackToTopClick);
    }

    if (preloader) {
      preloader.style.display = 'none';
    }

    doc.body.style.height = 'auto';
    doc.documentElement.style.height = 'auto';

    let lenis: LenisInstance | undefined;
    let parallax: UkiyoInstance | undefined;
    let rafId: number | null = null;

    if (w.Ukiyo) {
      parallax = new w.Ukiyo('.ukiyo', { externalRAF: true });
    }

    if (w.Lenis) {
      lenis = new w.Lenis({
        duration: 0.75,
        smoothWheel: true,
        smoothTouch: false,
      });
    }

    if (lenis || parallax) {
      const raf = (time: number) => {
        if (parallax?.animate) {
          parallax.animate();
        }
        if (lenis) {
          lenis.raf(time);
        }
        rafId = window.requestAnimationFrame(raf);
      };

      rafId = window.requestAnimationFrame(raf);
    }

    return () => {
      if (navbar || backToTop) {
        window.removeEventListener('scroll', onScroll);
      }
      if (backToTop) {
        backToTop.removeEventListener('click', onBackToTopClick);
      }
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      lenis?.destroy?.();
      parallax?.destroy?.();
    };
  }, []);

  useEffect(() => {
    const w = window as TemplateWindow;
    const doc = document;
    const cleanups: Array<() => void> = [];

    const swipers: SwiperInstance[] = [];
    const Swiper = w.Swiper;
    const initSwiper = (selector: string, options: Record<string, unknown>) => {
      doc.querySelectorAll(selector).forEach((element) => {
        if (Swiper) {
          swipers.push(new Swiper(element, options));
        }
      });
    };

    if (Swiper) {
      initSwiper('.services-slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        preventClicks: true,
        loop: false,
        autoHeight: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          clickable: true,
          el: '.swiper-pagination-services',
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2.9 },
          1200: { slidesPerView: 3 },
          1600: { slidesPerView: 3 },
        },
      });

      initSwiper('.testimonial-slide', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        preventClicks: true,
        loop: false,
        autoHeight: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: '.swiper-pagination-testimonial',
          clickable: true,
        },
        navigation: {
          prevEl: '.next2',
          nextEl: '.prev2',
        },
      });

      initSwiper('.projects-slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        preventClicks: true,
        loop: true,
        autoHeight: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          clickable: true,
        },
        navigation: {
          prevEl: '.next1',
          nextEl: '.prev1',
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2.5 },
          1200: { slidesPerView: 3 },
          1600: { slidesPerView: 3 },
        },
      });

      initSwiper('.projects-slide-two', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        preventClicks: true,
        loop: true,
        autoHeight: true,
        effect: 'coverflow',
        autoplay: {
          delay: 5000000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: '.swiper-pagination-projects-two',
          clickable: true,
        },
        navigation: {
          prevEl: '.next1',
          nextEl: '.prev1',
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2.5 },
          1200: { slidesPerView: 3 },
          1600: { slidesPerView: 3 },
        },
      });

      initSwiper('.team-slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        preventClicks: true,
        loop: false,
        autoHeight: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: '.swiper-pagination-team',
          clickable: true,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2.5 },
          1200: { slidesPerView: 3 },
          1600: { slidesPerView: 4 },
        },
      });

      initSwiper('.partner-slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        preventClicks: true,
        loop: false,
        autoHeight: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          485: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
          1600: { slidesPerView: 6 },
        },
      });

      initSwiper('.products-slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        preventClicks: true,
        loop: false,
        autoHeight: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: '.swiper-pagination-products',
          clickable: true,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2.5 },
          1200: { slidesPerView: 3 },
          1600: { slidesPerView: 4 },
        },
      });
    }

    cleanups.push(() => {
      swipers.forEach((swiper) => {
        try {
          swiper.destroy(true, true);
        } catch {
          // ignore destroy errors on stale instances
        }
      });
    });

    const beforeAfter = doc.getElementById('before_after');
    if (beforeAfter) {
      const container = doc.querySelector<HTMLElement>('.ba-container');
      const afterImg = doc.getElementById('after-img');
      const handle = doc.getElementById('ba-handle');

      if (container && afterImg && handle) {
        let isDragging = false;

        const onDown = () => {
          isDragging = true;
        };

        const onUp = () => {
          isDragging = false;
        };

        const onMove = (event: PointerEvent) => {
          if (!isDragging) return;
          const rect = container.getBoundingClientRect();
          let x = event.clientX - rect.left;
          if (x < 0) x = 0;
          if (x > rect.width) x = rect.width;
          const percent = (x / rect.width) * 100;

          afterImg.style.width = `${percent}%`;
          handle.style.left = `${percent}%`;
        };

        handle.addEventListener('pointerdown', onDown);
        window.addEventListener('pointerup', onUp);
        window.addEventListener('pointermove', onMove);

        cleanups.push(() => {
          handle.removeEventListener('pointerdown', onDown);
          window.removeEventListener('pointerup', onUp);
          window.removeEventListener('pointermove', onMove);
        });
      }
    }

    const counters = Array.from(doc.querySelectorAll<HTMLElement>('.counter'));
    if (counters.length) {
      const speed = 200;
      const intervals = new Map<HTMLElement, number>();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const counter = entry.target as HTMLElement;
          if (counter.dataset.counted === 'true') return;
          const target = Number.parseInt(counter.innerText, 10);
          if (!Number.isFinite(target)) return;

          counter.dataset.counted = 'true';
          let count = 0;
          const intervalId = window.setInterval(() => {
            count += 1;
            counter.innerText = String(count);
            if (count >= target) {
              window.clearInterval(intervalId);
            }
          }, speed);
          intervals.set(counter, intervalId);
        });
      });

      counters.forEach((counter) => observer.observe(counter));
      cleanups.push(() => {
        observer.disconnect();
        intervals.forEach((id) => window.clearInterval(id));
      });
    }

    const quantityWrappers = Array.from(
      doc.querySelectorAll<HTMLElement>('.item-quantity')
    );
    quantityWrappers.forEach((wrapper) => {
      const input = wrapper.querySelector<HTMLInputElement>('.quantity-input');
      const downButton = wrapper.querySelector<HTMLElement>('.down-arrow')?.closest(
        '.quantity-btn'
      );
      const upButton = wrapper.querySelector<HTMLElement>('.up-arrow')?.closest(
        '.quantity-btn'
      );

      if (!input) return;

      const onUp = () => {
        const value = Number.parseInt(input.value, 10);
        input.value = String(Number.isFinite(value) ? value + 1 : 1);
      };

      const onDown = () => {
        const value = Number.parseInt(input.value, 10);
        if (Number.isFinite(value) && value > 1) {
          input.value = String(value - 1);
        }
      };

      upButton?.addEventListener('click', onUp);
      downButton?.addEventListener('click', onDown);

      cleanups.push(() => {
        upButton?.removeEventListener('click', onUp);
        downButton?.removeEventListener('click', onDown);
      });
    });

    const ratings = Array.from(doc.querySelectorAll<HTMLElement>('.rating'));
    ratings.forEach((rating) => {
      const onClick = () => {
        ratings.forEach((item) => item.classList.remove('active'));
        let current: HTMLElement | null = rating;
        while (current) {
          current.classList.add('active');
          current = current.previousElementSibling as HTMLElement | null;
        }
      };

      rating.addEventListener('click', onClick);
      cleanups.push(() => rating.removeEventListener('click', onClick));
    });

    const paymentRoot = doc.getElementById('payment_method');
    if (paymentRoot) {
      const radios = paymentRoot.querySelectorAll<HTMLInputElement>(
        '.payment-option input[type=\"radio\"]'
      );
      radios.forEach((radio) => {
        const onChange = () => {
          paymentRoot
            .querySelectorAll('.payment-option')
            .forEach((option) => option.classList.remove('active'));
          radio.closest('.payment-option')?.classList.add('active');
        };

        radio.addEventListener('change', onChange);
        cleanups.push(() => radio.removeEventListener('change', onChange));
      });
    }

    const loginCouponRoot = doc.getElementById('login_coupon');
    if (loginCouponRoot) {
      const radios = loginCouponRoot.querySelectorAll<HTMLInputElement>(
        '.login-coupon-option input[type=\"radio\"]'
      );
      radios.forEach((radio) => {
        const onChange = () => {
          loginCouponRoot
            .querySelectorAll('.login-coupon-option')
            .forEach((option) => option.classList.remove('active'));
          radio.closest('.login-coupon-option')?.classList.add('active');
        };

        radio.addEventListener('change', onChange);
        cleanups.push(() => radio.removeEventListener('change', onChange));
      });
    }

    const modal = doc.getElementById('staticBackdrop');
    if (modal) {
      const onDocumentClick = (event: MouseEvent) => {
        const input = doc.getElementById('searchInput');
        const modalContent = modal.querySelector('.modal-content');
        if (!input || !modalContent) return;
        if (!modal.classList.contains('show')) return;

        const target = event.target as Node;
        if (input.contains(target)) return;

        if (modalContent.contains(target) && !input.contains(target)) {
          const instance = w.bootstrap?.Modal?.getInstance(modal);
          instance?.hide();
        }
      };

      doc.addEventListener('click', onDocumentClick);
      cleanups.push(() => doc.removeEventListener('click', onDocumentClick));
    }

    const menuItems = Array.from(
      doc.querySelectorAll<HTMLElement>('.mobile-menu-list')
    );
    if (menuItems.length) {
      const onAccordion = function (this: HTMLElement, event: Event) {
        event.stopPropagation();
        if (this.classList.contains('active')) {
          this.classList.remove('active');
          return;
        }

        if (this.parentElement?.parentElement?.classList.contains('active')) {
          this.classList.add('active');
          return;
        }

        menuItems.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
      };

      menuItems.forEach((item) => item.addEventListener('click', onAccordion));
      cleanups.push(() =>
        menuItems.forEach((item) =>
          item.removeEventListener('click', onAccordion)
        )
      );
    }

    w.scrollCue?.init();

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [location.pathname]);
}
