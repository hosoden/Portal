(() => {
  const games = Array.isArray(window.games) ? window.games : [];
  const gameList = document.querySelector("#game-list");
  const categoryFilter = document.querySelector("#category-filter");
  const ageFilter = document.querySelector("#age-filter");
  const resultCount = document.querySelector("#results-count");
  const emptyState = document.querySelector("#empty-state");
  const dialog = document.querySelector("#game-dialog");
  const dialogContent = document.querySelector("#dialog-content");
  const closeButton = dialog.querySelector(".dialog-close");

  const icons = {
    tracing: `
      <svg viewBox="0 0 190 148" role="img" aria-label="点線の文字をなぞるイラスト">
        <path d="M37 108 C42 83 48 59 65 47 C79 37 96 48 99 64 C103 84 78 94 67 78 C57 63 67 47 85 43 C104 39 116 53 116 75 C116 91 113 105 109 116" fill="none" stroke="#fff" stroke-width="23" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M37 108 C42 83 48 59 65 47 C79 37 96 48 99 64 C103 84 78 94 67 78 C57 63 67 47 85 43 C104 39 116 53 116 75 C116 91 113 105 109 116" fill="none" stroke="#f1826d" stroke-width="5" stroke-dasharray="1 9" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="140" cy="93" r="20" fill="#ffd45c"/><path d="M133 94l6 6 10-13" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    maze: `
      <svg viewBox="0 0 190 148" role="img" aria-label="めいろの道を進むイラスト">
        <rect x="31" y="24" width="128" height="100" rx="14" fill="#fff" stroke="#7ab999" stroke-width="5"/>
        <path d="M54 26v28h27V39h22v34H79v24h30V82h25v42M31 77h24v25h24M107 26v13m25 0v34m-25 0v9m27-9h26" fill="none" stroke="#b7dfcc" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="53" cy="48" r="8" fill="#f2a967"/><path d="M145 101l8 13h-16z" fill="#f17b68"/>
        <circle cx="54" cy="48" r="3" fill="#fff"/>
      </svg>`,
    color: `
      <svg viewBox="0 0 190 148" role="img" aria-label="色えんぴつとカラフルな絵のイラスト">
        <rect x="43" y="31" width="93" height="85" rx="12" fill="#fff" stroke="#d0c0ef" stroke-width="4"/>
        <circle cx="75" cy="65" r="17" fill="#ffb57d"/><circle cx="111" cy="70" r="17" fill="#a5dccc"/>
        <path d="M67 99q14-20 27 0m-9 0q14-22 29 0" fill="none" stroke="#7d70aa" stroke-width="4" stroke-linecap="round"/>
        <path d="M32 117l34-74 13 6-34 74-17 10z" fill="#ff8b79"/><path d="M32 117l-4 16 17-6z" fill="#ffd16c"/>
        <path d="M135 37l5-12m12 22 12-4m-19 18 11 8" stroke="#f3b946" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
    shapes: `
      <svg viewBox="0 0 190 148" role="img" aria-label="幾何学模様のパズルピースのイラスト">
        <path d="M43 40h35a12 12 0 1 1 24 0h33v33a12 12 0 1 0 0 24v24h-35a12 12 0 1 0-24 0H43V91a12 12 0 1 0 0-24z" fill="#fff" stroke="#9e8acf" stroke-width="5" stroke-linejoin="round"/>
        <path d="M60 59l12 20H48z" fill="#ffb873"/><circle cx="111" cy="62" r="12" fill="#86c8ac"/>
        <path d="M105 91h23v22h-23z" rx="4" fill="#f48778"/>
      </svg>`
  };

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

  const ageRangeMatches = (game, selectedRange) => {
    if (selectedRange === "all") return true;
    const [min, max] = selectedRange.split("-").map(Number);
    return game.ageMin <= max && game.ageMax >= min;
  };

  const getVisibleGames = () => games.filter((game) => (
    (categoryFilter.value === "all" || game.category === categoryFilter.value) &&
    ageRangeMatches(game, ageFilter.value)
  ));

  const gameArt = (game) => `
    <div class="game-art art-${escapeHtml(game.icon === "tracing" || game.icon === "maze" ? game.icon : "placeholder")}">
      <span class="art-badge">${game.status === "available" ? "すぐにあそべるよ" : "COMING SOON"}</span>
      <span class="art-spark art-spark-one" aria-hidden="true">✦</span>
      <span class="art-spark art-spark-two" aria-hidden="true">✧</span>
      ${icons[game.icon] || ""}
    </div>`;

  const renderCard = (game) => {
    const isAvailable = game.status === "available";
    const tag = `<span class="game-tag">${escapeHtml(game.categoryLabel)}</span>`;
    const age = `<span class="game-tag tag-age">${escapeHtml(game.ageLabel)}</span>`;
    const action = isAvailable
      ? `<a class="button button-primary button-small" href="${escapeHtml(game.url)}" target="_blank" rel="noopener noreferrer">ゲームであそぶ <span aria-hidden="true">↗</span></a>`
      : `<span class="button button-disabled button-small" aria-label="公開準備中">公開準備中</span>`;

    return `
      <article class="game-card">
        ${gameArt(game)}
        <div class="game-card-body">
          <div class="game-tags">${tag}${age}</div>
          <h3>${escapeHtml(game.title)}</h3>
          <p class="game-card-description">${escapeHtml(game.description)}</p>
          <div class="game-card-actions">
            <button class="button button-outline button-small" type="button" data-game-id="${escapeHtml(game.id)}" aria-haspopup="dialog">遊び方・育つ力</button>
            ${action}
          </div>
        </div>
      </article>`;
  };

  const renderGames = () => {
    const visibleGames = getVisibleGames();
    gameList.innerHTML = visibleGames.map(renderCard).join("");
    resultCount.textContent = `${visibleGames.length}件のゲーム`;
    emptyState.hidden = visibleGames.length > 0;
  };

  const showGameDetails = (game) => {
    const howTo = game.howTo.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
    const skills = game.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("");
    const art = gameArt(game).replace('class="game-art', 'class="dialog-art game-art');
    const startLink = game.status === "available"
      ? `<a class="button button-primary dialog-start" href="${escapeHtml(game.url)}" target="_blank" rel="noopener noreferrer">ゲームであそぶ <span aria-hidden="true">↗</span></a>`
      : `<p class="dialog-age">このゲームは準備中です。公開までお楽しみに！</p>`;

    dialogContent.innerHTML = `
      ${art}
      <p class="eyebrow">${escapeHtml(game.subtitle || game.categoryLabel)}</p>
      <h2 id="dialog-title">${escapeHtml(game.title)}</h2>
      <p class="dialog-age">対象年齢の目安：${escapeHtml(game.ageLabel)}</p>
      <p>${escapeHtml(game.description)}</p>
      <h3>遊び方</h3>
      <ol>${howTo}</ol>
      <h3>遊んで育まれる力</h3>
      <ul>${skills}</ul>
      <h3>保護者の方へ</h3>
      <p>${escapeHtml(game.parentTip)}</p>
      ${startLink}`;
    dialog.showModal();
  };

  gameList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-game-id]");
    if (!button) return;
    const game = games.find((item) => item.id === button.dataset.gameId);
    if (game) showGameDetails(game);
  });

  categoryFilter.addEventListener("change", renderGames);
  ageFilter.addEventListener("change", renderGames);
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  document.querySelector("#current-year").textContent = new Date().getFullYear();

  renderGames();
})();
