// SNSリンク設定（ここで一元管理・変更が可能です）
const SNS_CONFIG = {
  instagram: 'https://instagram.com/your_account',
  tiktok: 'https://www.tiktok.com/@your_account',
  x: 'https://x.com/your_account' // フッター用のXリンク
};

document.addEventListener('DOMContentLoaded', () => {
  // SNSリンクの動的適用
  const snsElements = document.querySelectorAll('[data-sns]');
  snsElements.forEach(element => {
    const snsType = element.getAttribute('data-sns');
    if (SNS_CONFIG[snsType]) {
      element.href = SNS_CONFIG[snsType];
      element.setAttribute('target', '_blank');
      element.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // スクロール連動アニメーション (Intersection Observer)
  const observerOptions = {
    root: null,
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 一度表示されたら監視を解除
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in, .fade-up');
  fadeElements.forEach(el => observer.observe(el));
});
