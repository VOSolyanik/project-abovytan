(() => {
  const isDesktopView = window.matchMedia('(min-width: 1152px)').matches;
  if (!isDesktopView) return;

  document.addEventListener('DOMContentLoaded', function () {
    const lessonsListItems = document.querySelectorAll('.lessons-list-item'),
      aboutUsListItems = document.querySelectorAll('.about-us-list-item'),
      brandUnderlineElements = document.querySelectorAll('.brand-underline'),
      proposalContentWrapper = document.querySelector(
        '.proposal-content-wrapper'
      ),
      allItems = [...lessonsListItems, ...aboutUsListItems],
      windowHeight = window.innerHeight;

    allItems.forEach(item => {
      item.style.visibility = 'hidden';
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.style.visibility = 'visible';

            if (target.classList.contains('lessons-list-item')) {
              if (target === lessonsListItems[0]) {
                target.classList.add('animate__backInLeft');
              } else if (target === lessonsListItems[1]) {
                target.classList.add('animate__backInDown');
              } else if (target === lessonsListItems[2]) {
                target.classList.add('animate__backInRight');
              }
            }

            if (target.classList.contains('about-us-list-item')) {
              target.classList.add('animate__fadeInLeft');
            }

            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    allItems.forEach(item => {
      observer.observe(item);
    });

    const throttle = (func, limit) => {
      let lastCall = 0;
      return function () {
        const now = new Date().getTime();
        if (now - lastCall >= limit) {
          lastCall = now;
          func.apply(this, arguments);
        }
      };
    };

    const handleScroll = () => {
      brandUnderlineElements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        if (elementRect.top < windowHeight * 0.5) {
          element.classList.add('js-animate');
        }
      });

      if (proposalContentWrapper) {
        const wrapperRect = proposalContentWrapper.getBoundingClientRect();
        if (wrapperRect.top >= 0 && wrapperRect.bottom <= windowHeight) {
          proposalContentWrapper.classList.add('js-animate');
        }
      }
    };

    document.addEventListener('scroll', throttle(handleScroll, 100));
  });
})();
