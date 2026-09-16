/* =========================================================
   FAVOUR'S BLOG — SCRIPT.JS
   Contains: blog post data, rendering helpers for each page,
   navigation behavior, search/filter/pagination, and form logic.
   ========================================================= */

/* ---------- BLOG POST DATA ----------
   This array is the single source of truth for every blog post.
   Each post has an id/slug (used in the URL: post.html?slug=...),
   a category, and full content used to build post.html dynamically. */
const blogPosts = [
  {
    id: 1,
    slug: "starting-my-coding-journey",
    title: "Starting My Coding Journey: What I Wish I Knew",
    category: "Coding",
    date: "2024-02-14",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=900&h=600&fit=crop",
    excerpt: "A few months ago I opened my first code editor and had absolutely no idea what I was doing. Here's everything I wish someone had told me before I started.",
    content: [
      "I still remember the first time I opened a code editor. The blinking cursor felt like it was judging me. I had watched a dozen 'coding for beginners' videos, but nothing quite prepared me for that blank screen.",
      "The biggest thing I wish I knew is that confusion is part of the process, not a sign that you're bad at this. Every developer I've talked to, no matter how experienced, still Googles things they 'should' know. That single realization took so much pressure off.",
      "I also wish I hadn't tried to learn everything at once. I bounced between HTML, Python, and JavaScript tutorials in my first week and ended up understanding none of them well. Picking one path and sticking with it for a few weeks made a much bigger difference than trying to learn it all overnight.",
      "The last thing I'd tell my beginner self is to build small, slightly embarrassing projects early. My first 'project' was a plain HTML page about my favorite candles. It wasn't impressive, but typing tags and actually seeing them turn into a real webpage is what made coding feel possible instead of abstract.",
      "If you're just starting out too, go easy on yourself. You're allowed to feel behind and still be exactly where you need to be."
    ]
  },
  {
    id: 2,
    slug: "things-im-learning-in-my-20s",
    title: "Things I'm Learning in My 20s",
    category: "Personal Growth",
    date: "2024-03-05",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900&h=600&fit=crop",
    excerpt: "Nobody warns you how much unlearning your twenties actually require. Here are a few lessons that have quietly reshaped how I move through my days.",
    content: [
      "Somewhere between figuring out my career and figuring out my laundry schedule, I've picked up a few lessons I didn't expect to learn this early.",
      "The first is that comparison really does steal joy, and it's sneakier than people make it sound. It's not just about scrolling and feeling behind — it's catching myself mid-conversation, measuring my pace against someone else's highlight reel.",
      "The second is that rest is not something you earn after finishing everything on your list. I used to treat rest like a reward. Now I try to treat it like maintenance, something I do because I'm human, not because I hit a quota.",
      "I'm also learning that not every season needs a plan. Some of my most meaningful growth has happened in the in-between months I couldn't explain to anyone if they asked what I was 'doing with my life' at the time.",
      "None of this means I have it figured out. I just have a little more grace for myself than I did last year, and honestly, that feels like enough progress for now."
    ]
  },
  {
    id: 3,
    slug: "soft-girl-guide-to-romanticizing-the-little-things",
    title: "A Soft Girl's Guide to Romanticizing the Little Things",
    category: "Lifestyle",
    date: "2024-01-22",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&h=600&fit=crop",
    excerpt: "You don't need a big trip or a big moment to feel like the main character. Some of my favorite days have been made entirely of small, soft details.",
    content: [
      "I used to think romanticizing your life meant candles, a Pinterest-worthy desk, and a morning routine with seven steps. It can be that, but it doesn't have to be.",
      "Lately my version of romanticizing the little things looks like making my tea in my favorite mug even when I'm rushing, taking the slightly longer walk home if the weather is nice, and actually looking up when I hear birds instead of scrolling past the sound.",
      "One of my favorite tiny rituals is choosing one song to play while I get ready, on purpose, like it's the soundtrack to a scene. It sounds silly written down, but it changes how the whole morning feels.",
      "I've also started narrating small wins to myself the way I'd tell a friend about them. 'I made my bed today' sounds boring in my head, but 'I woke up and made my space feel a little more like home' feels like something worth noticing.",
      "You don't need your life to look aesthetic for it to feel meaningful. You just need to actually notice it while it's happening."
    ]
  },
  {
    id: 4,
    slug: "what-learning-html-taught-me",
    title: "What Learning HTML Taught Me",
    category: "Coding",
    date: "2024-02-28",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=600&fit=crop",
    excerpt: "HTML gets called 'the easy one,' but it taught me more about patience and structure than I expected from a markup language.",
    content: [
      "When people talk about learning to code, HTML often gets dismissed as the 'easy' starting point. Maybe it is easy compared to what comes after, but it still taught me things I didn't expect.",
      "The first lesson was structure matters. Before HTML, I never thought about how a page is actually built piece by piece — a header here, a section there, everything nested inside something else. It made me start noticing structure everywhere, even outside of code.",
      "The second lesson was that small mistakes have visible consequences. Forgetting to close a tag, or nesting something incorrectly, would quietly break my layout. It taught me to slow down and actually read what I wrote instead of assuming it was right.",
      "HTML also gave me my first real 'it's working!' moment. Seeing a heading, a paragraph, and an image actually show up in a browser, exactly where I told them to go, was such a small thing, but it made everything after it feel possible.",
      "I don't think there's such a thing as a 'basic' skill when it's the one that opens the door to everything else."
    ]
  },
  {
    id: 5,
    slug: "creating-content-when-you-dont-feel-confident",
    title: "Creating Content When You Don't Feel Confident",
    category: "Content Creation",
    date: "2024-03-18",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&h=600&fit=crop",
    excerpt: "I hit record more times than I finished a video in my first month. Here's how I keep showing up even when confidence doesn't show up with me.",
    content: [
      "If I waited to feel fully confident before creating anything, I don't think I would have posted a single video by now. Confidence, for me, mostly comes after I start, not before.",
      "One thing that helped was lowering the bar for what counts as 'starting.' I stopped requiring myself to film something polished and started requiring myself to just open the camera app. That's it. Some days that's as far as I get, and that's fine.",
      "I also had to get honest about who I was actually creating for. When I imagined a huge, judgmental audience, I froze. When I imagined one specific person who might genuinely find the content useful, it got so much easier to just talk.",
      "Editing out my own harsh commentary has mattered too. I used to narrate every flaw in my head while filming — my voice, my face, my ideas. Now I try to treat that inner voice the way I'd treat a slightly rude commenter: acknowledge it, then keep going anyway.",
      "Confidence isn't a requirement for creating. Consistency, even the imperfect, unconfident kind, tends to build it along the way."
    ]
  },
  {
    id: 6,
    slug: "learning-to-trust-gods-timing",
    title: "Learning to Trust God's Timing",
    category: "Faith",
    date: "2024-01-09",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=900&h=600&fit=crop",
    excerpt: "I've spent a lot of time praying for things to move faster. This year I'm learning what it means to actually trust the pace things are moving at.",
    content: [
      "For a long time, my prayers sounded a lot like negotiations. I'd ask for patience, then immediately ask for things to hurry up anyway. I wanted the growth without the waiting.",
      "What's shifted for me is realizing that waiting isn't the opposite of progress. Some of the most important things happening in me right now aren't visible yet, and that doesn't mean they aren't happening.",
      "I've started trying to notice what a season is actually teaching me instead of only asking when it will end. It's a small change in posture, but it's made waiting feel less like punishment and more like preparation.",
      "This doesn't mean I've stopped hoping for things to move. I still bring my impatience honestly, because I think that's allowed too. I just try to bring it alongside trust instead of instead of it.",
      "If you're in a season that feels delayed right now, I don't have a neat answer for when it ends. I just believe, more than I used to, that it isn't wasted time."
    ]
  },
  {
    id: 7,
    slug: "my-simple-reset-routine",
    title: "My Simple Reset Routine",
    category: "Lifestyle",
    date: "2024-03-11",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=900&h=600&fit=crop",
    excerpt: "When everything feels like a little too much, this is the short routine I turn to instead of trying to fix everything at once.",
    content: [
      "Some weeks pile up quietly until I realize I haven't opened a window, changed my sheets, or looked at my to-do list without wanting to cry a little. When that happens, I don't try to reset my whole life — I run through this small routine instead.",
      "First, I clear one surface. Just one. My desk, my nightstand, whatever is closest. There's something about seeing one clean space that makes the rest of the mess feel less permanent.",
      "Second, I change out of whatever I've been wearing all day, even if I'm not going anywhere. It sounds minor, but it genuinely signals to my brain that something is shifting.",
      "Third, I make one warm drink and actually sit down for it, instead of drinking it while doing three other things. Five uninterrupted minutes does more for me than an hour of half-focused rest.",
      "Last, I write down three things for tomorrow — not ten, just three — so my brain can stop trying to hold the whole list at once. It's a small routine, but it's usually enough to feel like myself again."
    ]
  },
  {
    id: 8,
    slug: "behind-the-scenes-of-my-creative-journey",
    title: "Behind the Scenes of My Creative Journey",
    category: "Creativity",
    date: "2024-02-02",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&h=600&fit=crop",
    excerpt: "The version of my creative journey people see is edited, literally and figuratively. Here's some of what usually gets left out.",
    content: [
      "People sometimes ask how I 'became creative,' as if it was a single decision instead of a very long, messy accumulation of tries. So here's some of what usually stays behind the scenes.",
      "For every project I share, there are a handful I abandoned halfway through, either because they weren't working or because I lost interest once the idea stopped being new and started being work.",
      "A lot of my 'creative process' is actually just rearranging my space. I clean, I light a candle, I make a playlist, and somewhere in the middle of all that stalling, an idea usually shows up. I've stopped fighting that pattern and started planning around it.",
      "I also don't think I'm naturally more creative than anyone else. I just give myself permission to make bad first drafts, which means I actually finish things other people might abandon at the 'this looks embarrassing' stage.",
      "If you're in the middle of your own messy creative process right now, I promise the behind-the-scenes of everyone else's looks a lot less impressive than the final post makes it seem."
    ]
  }
];

/* Map each category to an emoji icon and short description,
   used on the home page and categories page. */
const categoryInfo = {
  "Lifestyle": { icon: "🌷", description: "Slow mornings, soft routines, and everyday moments worth noticing." },
  "Coding": { icon: "💻", description: "Lessons, wins, and stumbles from learning to build things." },
  "Content Creation": { icon: "🎥", description: "Behind-the-scenes thoughts on creating and sharing online." },
  "Faith": { icon: "🕊️", description: "Reflections on trust, timing, and walking with God." },
  "Personal Growth": { icon: "🌱", description: "Lessons from figuring life out, one season at a time." },
  "Creativity": { icon: "🎨", description: "The messy, honest process behind creative work." }
};

/* ---------- UTILITIES ---------- */

// Formats an ISO date string like "2024-03-05" into "March 5, 2024"
function formatDate(isoDate) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(isoDate + "T00:00:00").toLocaleDateString("en-US", options);
}

// Returns the CSS class used to color a category tag (pink or purple)
function categoryTagClass(category) {
  const purpleCategories = ["Coding", "Faith", "Creativity"];
  return purpleCategories.includes(category) ? "post-category-tag purple" : "post-category-tag";
}

// Builds the HTML markup for a single blog post card
function buildPostCard(post) {
  return `
    <article class="post-card">
      <a href="post.html?slug=${post.slug}" class="post-card-image">
        <img src="${post.image}" alt="${post.title}" loading="lazy" width="400" height="300">
      </a>
      <div class="post-card-body">
        <span class="${categoryTagClass(post.category)}">${post.category}</span>
        <h3><a href="post.html?slug=${post.slug}">${post.title}</a></h3>
        <p class="post-excerpt">${post.excerpt}</p>
        <div class="post-meta">
          <span>${formatDate(post.date)}</span>
          <span>${post.readTime}</span>
        </div>
        <div class="post-card-footer">
          <a href="post.html?slug=${post.slug}" class="read-more">Read More &rsaquo;</a>
        </div>
      </div>
    </article>
  `;
}

// Finds a post object by its slug
function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}

/* ---------- SHARED: NAVIGATION ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close mobile menu after a link is clicked
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Highlight the current page in the nav
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  menu.querySelectorAll("a").forEach((link) => {
    const linkPage = link.getAttribute("href").split("#")[0];
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

/* ---------- SHARED: BACK TO TOP ---------- */
function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- SHARED: NEWSLETTER FORM ---------- */
function initNewsletterForm() {
  const form = document.querySelector(".newsletter-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = form.querySelector("input[type='email']");
    const successMsg = form.parentElement.querySelector(".form-success");
    if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
      emailInput.focus();
      return;
    }
    if (successMsg) {
      successMsg.textContent = "You're subscribed! Thank you for joining 💌";
      successMsg.classList.add("visible");
    }
    form.reset();
  });
}

/* ---------- HOME PAGE ---------- */
function renderHomePage() {
  const featuredWrap = document.querySelector("#featured-post-slot");
  const latestWrap = document.querySelector("#latest-posts-slot");
  const categoryWrap = document.querySelector("#home-category-slot");

  if (featuredWrap) {
    const featured = blogPosts[4]; // "Creating Content When You Don't Feel Confident"
    featuredWrap.innerHTML = `
      <div class="featured-post-image">
        <img src="${featured.image}" alt="${featured.title}" loading="lazy">
      </div>
      <div class="featured-post-body">
        <span class="${categoryTagClass(featured.category)}">${featured.category}</span>
        <h3 style="font-size:1.7rem; margin-top:0.6rem;"><a href="post.html?slug=${featured.slug}">${featured.title}</a></h3>
        <p class="post-excerpt">${featured.excerpt}</p>
        <div class="post-meta">
          <span>${formatDate(featured.date)}</span>
          <span>${featured.readTime}</span>
        </div>
        <a href="post.html?slug=${featured.slug}" class="btn btn-primary btn-small">Read More</a>
      </div>
    `;
  }

  if (latestWrap) {
    const latest = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    latestWrap.innerHTML = latest.map(buildPostCard).join("");
  }

  if (categoryWrap) {
    categoryWrap.innerHTML = Object.keys(categoryInfo)
      .map((cat) => {
        const count = blogPosts.filter((p) => p.category === cat).length;
        return `
          <a href="categories.html#${cat.toLowerCase().replace(/\s+/g, "-")}" class="category-chip">
            <span class="chip-icon">${categoryInfo[cat].icon}</span>
            <span class="chip-label">${cat}</span>
            <span class="chip-count">${count} post${count > 1 ? "s" : ""}</span>
          </a>
        `;
      })
      .join("");
  }
}

/* ---------- BLOG PAGE (search, filter, load more) ---------- */
function initBlogPage() {
  const grid = document.querySelector("#blog-post-grid");
  if (!grid) return;

  const searchInput = document.querySelector("#blog-search");
  const filterPills = document.querySelectorAll(".filter-pill");
  const loadMoreBtn = document.querySelector("#load-more-btn");
  const noResults = document.querySelector("#no-results-message");

  let activeCategory = "All";
  let searchTerm = "";
  let visibleCount = 6;
  const pageSize = 6;

  function getFilteredPosts() {
    return blogPosts
      .filter((p) => activeCategory === "All" || p.category === activeCategory)
      .filter((p) => {
        const haystack = (p.title + " " + p.excerpt).toLowerCase();
        return haystack.includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function render() {
    const filtered = getFilteredPosts();
    const visible = filtered.slice(0, visibleCount);
    grid.innerHTML = visible.map(buildPostCard).join("");

    if (noResults) {
      noResults.classList.toggle("visible", filtered.length === 0);
    }

    if (loadMoreBtn) {
      loadMoreBtn.style.display = visibleCount >= filtered.length ? "none" : "inline-flex";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value;
      visibleCount = pageSize;
      render();
    });
  }

  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.dataset.category;
      visibleCount = pageSize;
      render();
    });
  });

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      visibleCount += pageSize;
      render();
    });
  }

  // Support linking straight into a category via ?category=Coding
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category");
  if (requestedCategory) {
    const matchingPill = Array.from(filterPills).find((p) => p.dataset.category === requestedCategory);
    if (matchingPill) {
      filterPills.forEach((p) => p.classList.remove("active"));
      matchingPill.classList.add("active");
      activeCategory = requestedCategory;
    }
  }

  render();
}

/* ---------- CATEGORIES PAGE ---------- */
function renderCategoriesPage() {
  const wrap = document.querySelector("#categories-slot");
  if (!wrap) return;

  wrap.innerHTML = Object.keys(categoryInfo)
    .map((cat) => {
      const posts = blogPosts.filter((p) => p.category === cat);
      const anchor = cat.toLowerCase().replace(/\s+/g, "-");
      return `
        <div class="category-section-block" id="${anchor}">
          <div class="category-block-heading">
            <span class="chip-icon">${categoryInfo[cat].icon}</span>
            <div>
              <h2>${cat}</h2>
              <p>${categoryInfo[cat].description}</p>
            </div>
          </div>
          <div class="post-grid">
            ${posts.map(buildPostCard).join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

/* ---------- SINGLE POST PAGE ---------- */
function renderPostPage() {
  const wrap = document.querySelector("#post-detail-slot");
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const post = getPostBySlug(slug) || blogPosts[0];

  document.title = post.title + " | Favour";

  const sortedByDate = [...blogPosts].sort((a, b) => new Date(a.date) - new Date(b.date));
  const currentIndex = sortedByDate.findIndex((p) => p.slug === post.slug);
  const prevPost = sortedByDate[currentIndex - 1];
  const nextPost = sortedByDate[currentIndex + 1];

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const relatedFallback = related.length > 0
    ? related
    : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  wrap.innerHTML = `
    <div class="post-hero-meta">
      <span class="${categoryTagClass(post.category)}">${post.category}</span>
      <h1>${post.title}</h1>
      <div class="post-byline">
        <span>By Favour</span>
        <span class="dot"></span>
        <span>${formatDate(post.date)}</span>
        <span class="dot"></span>
        <span>${post.readTime}</span>
      </div>
    </div>
    <div class="post-featured-image">
      <img src="${post.image}" alt="${post.title}" loading="lazy">
    </div>
    <div class="post-body-wrap">
      <div class="post-content">
        ${post.content.map((para) => `<p>${para}</p>`).join("")}
      </div>
      <div class="share-row">
        <span class="share-label">Share this post</span>
        <a href="#" class="share-btn" aria-label="Share on Twitter" data-share="twitter">𝕏</a>
        <a href="#" class="share-btn" aria-label="Share on Facebook" data-share="facebook">f</a>
        <a href="#" class="share-btn" aria-label="Share on Pinterest" data-share="pinterest">P</a>
        <a href="#" class="share-btn" aria-label="Copy link" data-share="copy">🔗</a>
      </div>
    </div>
    <div class="post-nav">
      ${prevPost ? `
        <a href="post.html?slug=${prevPost.slug}" class="post-nav-link prev">
          <span class="post-nav-label">&lsaquo; Previous Post</span>
          <span class="post-nav-title">${prevPost.title}</span>
        </a>` : `<div></div>`}
      ${nextPost ? `
        <a href="post.html?slug=${nextPost.slug}" class="post-nav-link next">
          <span class="post-nav-label">Next Post &rsaquo;</span>
          <span class="post-nav-title">${nextPost.title}</span>
        </a>` : `<div></div>`}
    </div>
    <section class="related-posts">
      <div class="section-heading">
        <h2>Related Posts</h2>
      </div>
      <div class="post-grid">
        ${relatedFallback.map(buildPostCard).join("")}
      </div>
    </section>
  `;

  // Share button behavior (demo-friendly: copies link or opens share intent)
  wrap.querySelectorAll("[data-share]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const type = btn.dataset.share;
      const url = window.location.href;
      if (type === "copy") {
        navigator.clipboard?.writeText(url);
        btn.textContent = "✓";
        setTimeout(() => (btn.textContent = "🔗"), 1500);
      } else {
        const shareUrls = {
          twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`,
          facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(post.title)}`
        };
        window.open(shareUrls[type], "_blank", "noopener,noreferrer");
      }
    });
  });
}

/* ---------- CONTACT PAGE FORM VALIDATION ---------- */
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const fields = {
    name: { el: form.querySelector("#contact-name"), message: "Please enter your name." },
    email: { el: form.querySelector("#contact-email"), message: "Please enter a valid email address." },
    subject: { el: form.querySelector("#contact-subject"), message: "Please add a subject." },
    message: { el: form.querySelector("#contact-message"), message: "Please write a short message." }
  };

  function validateField(key) {
    const { el, message } = fields[key];
    const group = el.closest(".form-group");
    let valid = el.value.trim().length > 0;

    if (key === "email") {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
    }

    group.classList.toggle("has-error", !valid);
    return valid;
  }

  Object.keys(fields).forEach((key) => {
    fields[key].el.addEventListener("blur", () => validateField(key));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = Object.keys(fields).map((key) => validateField(key));
    const allValid = results.every(Boolean);
    const successMsg = form.querySelector(".form-success");

    if (allValid) {
      form.reset();
      if (successMsg) {
        successMsg.textContent = "Thank you! Your message has been sent — I'll reply soon 💌";
        successMsg.classList.add("visible");
      }
    } else if (successMsg) {
      successMsg.classList.remove("visible");
    }
  });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initBackToTop();
  initNewsletterForm();
  renderHomePage();
  initBlogPage();
  renderCategoriesPage();
  renderPostPage();
  initContactForm();
});
