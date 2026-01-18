const articles = [
    {
        emoji: "🏈",
        category: "Football",
        title: "Breaking Down the Big Game",
        excerpt: "In-depth analysis and expert commentary on this week's most anticipated matchup.",
        content: `
            <h2>Breaking Down the Big Game</h2>
            <p class="article-meta" style="color: #666; margin-bottom: 2rem;">Football | January 18, 2026</p>
            <p style="margin-bottom: 1rem;">This week's matchup is shaping up to be one of the most anticipated games of the season. Both teams come in with impressive records and championship aspirations.</p>
            <p style="margin-bottom: 1rem;">The quarterback matchup alone is worth the price of admission, with two of the league's most dynamic signal-callers going head-to-head. Our analysis shows that the key to victory will likely come down to which defense can generate more pressure without blitzing.</p>
            <p style="margin-bottom: 1rem;">Special teams could also play a crucial role, particularly in what's expected to be challenging weather conditions. Field position will be at a premium, making every punt and kickoff return potentially game-changing.</p>
            <p>Stay tuned for our full game preview and predictions coming later this week.</p>
        `
    },
    {
        emoji: "🏀",
        category: "Basketball",
        title: "March Madness Preview",
        excerpt: "Comprehensive guide to the teams and players to watch this tournament season.",
        content: `
            <h2>March Madness Preview</h2>
            <p class="article-meta" style="color: #666; margin-bottom: 2rem;">Basketball | January 18, 2026</p>
            <p style="margin-bottom: 1rem;">As we approach tournament season, several teams are emerging as legitimate contenders for the championship. The top seeds look strong, but history tells us that upsets are inevitable.</p>
            <p style="margin-bottom: 1rem;">Mid-major programs are having exceptional seasons, and several could be dangerous matchups for higher-seeded teams. The key factors we're watching include three-point shooting percentage, turnover margin, and experience in high-pressure situations.</p>
            <p>Our bracket predictions will be released next week, but early indicators suggest this could be one of the most competitive tournaments in recent memory.</p>
        `
    },
    {
        emoji: "⚾",
        category: "Baseball",
        title: "Spring Training Insights",
        excerpt: "All the spring training coverage you need as teams prepare for the season.",
        content: `
            <h2>Spring Training Insights</h2>
            <p class="article-meta" style="color: #666; margin-bottom: 2rem;">Baseball | January 18, 2026</p>
            <p style="margin-bottom: 1rem;">Spring training is underway, and there are already several compelling storylines emerging from camps across Florida and Arizona. Rookies are making their cases for roster spots, while veterans are fine-tuning their approaches for the long season ahead.</p>
            <p style="margin-bottom: 1rem;">Position battles are heating up, particularly in the outfield and bullpen for several contending teams. The emphasis on analytics continues to grow, with teams using data-driven approaches to optimize player performance and prevent injuries.</p>
            <p>We'll be tracking the most important developments throughout spring training, with daily updates on the players and teams to watch as opening day approaches.</p>
        `
    },
    {
        emoji: "⚽",
        category: "Soccer",
        title: "The Beautiful Game",
        excerpt: "Global soccer coverage with a local perspective, connecting fans across continents.",
        content: `
            <h2>The Beautiful Game</h2>
            <p class="article-meta" style="color: #666; margin-bottom: 2rem;">Soccer | January 17, 2026</p>
            <p style="margin-bottom: 1rem;">The global game continues to captivate audiences worldwide, and the upcoming fixtures promise drama, skill, and passion. From European leagues to international competitions, there's no shortage of compelling storylines.</p>
            <p style="margin-bottom: 1rem;">Tactical innovations are reshaping how teams approach matches, with pressing systems and possession-based play becoming increasingly sophisticated. Young talents are emerging as stars while established veterans continue to defy age.</p>
            <p>Join us as we explore the narratives that make soccer the world's most popular sport.</p>
        `
    },
    {
        emoji: "🏒",
        category: "Hockey",
        title: "On Thin Ice",
        excerpt: "Power plays, penalty kills, and playoff pushes - your complete guide to hockey.",
        content: `
            <h2>On Thin Ice</h2>
            <p class="article-meta" style="color: #666; margin-bottom: 2rem;">Hockey | January 17, 2026</p>
            <p style="margin-bottom: 1rem;">The race to the playoffs is heating up as teams jockey for position in their respective conferences. Every game matters now, and the intensity on the ice reflects the high stakes.</p>
            <p style="margin-bottom: 1rem;">Goaltending continues to be the great equalizer, with several netminders putting up MVP-caliber performances. The speed and skill of today's game has never been higher, making for exciting end-to-end action night after night.</p>
            <p>We'll keep you updated on the key developments as teams push toward the postseason.</p>
        `
    },
    {
        emoji: "🎯",
        category: "Features",
        title: "Athlete Spotlight",
        excerpt: "Exclusive interviews and behind-the-scenes stories from inspiring athletes.",
        content: `
            <h2>Athlete Spotlight</h2>
            <p class="article-meta" style="color: #666; margin-bottom: 2rem;">Features | January 16, 2026</p>
            <p style="margin-bottom: 1rem;">In this exclusive series, we go beyond the stats and highlights to explore the human side of athletic excellence. These are the stories of dedication, sacrifice, and triumph that inspire us all.</p>
            <p style="margin-bottom: 1rem;">From early morning workouts to the mental preparation required to perform under pressure, we uncover what it truly takes to compete at the highest level. Our featured athletes share their journeys, challenges, and the moments that defined their careers.</p>
            <p>These are more than just sports stories - they're lessons in perseverance, leadership, and the pursuit of greatness.</p>
        `
    },
    {
        emoji: "🏆",
        category: "Championships",
        title: "Road to Glory",
        excerpt: "Following teams on their championship journeys and legendary seasons.",
        content: `
            <h2>Road to Glory</h2>
            <p class="article-meta" style="color: #666; margin-bottom: 2rem;">Championships | January 16, 2026</p>
            <p style="margin-bottom: 1rem;">Championship runs are built on countless moments of brilliance, teamwork, and determination. As we follow this season's contenders, we're witnessing history in the making.</p>
            <p style="margin-bottom: 1rem;">The teams still in contention have overcome adversity, injuries, and tough opponents to position themselves for a title run. Their stories are filled with clutch performances, strategic adjustments, and the kind of chemistry that can't be taught.</p>
            <p>Join us as we chronicle the journey from hopeful contender to champion.</p>
        `
    },
    {
        emoji: "💪",
        category: "Training",
        title: "Elite Performance",
        excerpt: "Inside look at how athletes train, recover, and achieve peak performance.",
        content: `
            <h2>Elite Performance</h2>
            <p class="article-meta" style="color: #666; margin-bottom: 2rem;">Training | January 15, 2026</p>
            <p style="margin-bottom: 1rem;">Modern athletic performance is a science. From nutrition and sleep optimization to cutting-edge training methodologies, today's athletes are pushing the boundaries of human potential.</p>
            <p style="margin-bottom: 1rem;">We explore the latest research and techniques that elite athletes use to gain competitive advantages. Recovery protocols, mental conditioning, and data-driven training programs are revolutionizing how athletes prepare for competition.</p>
            <p>Discover the secrets behind peak athletic performance and how these principles can apply to anyone pursuing excellence.</p>
        `
    },
    {
        emoji: "📊",
        category: "Analytics",
        title: "By The Numbers",
        excerpt: "Deep statistical analysis and data-driven insights revealing hidden stories.",
        content: `
            <h2>By The Numbers</h2>
            <p class="article-meta" style="color: #666; margin-bottom: 2rem;">Analytics | January 15, 2026</p>
            <p style="margin-bottom: 1rem;">In the age of advanced analytics, numbers tell stories that the eye test might miss. From expected goals to defensive efficiency ratings, modern sports analysis goes far beyond traditional statistics.</p>
            <p style="margin-bottom: 1rem;">We dive deep into the data to uncover trends, identify undervalued players, and predict future outcomes. Our analytical approach combines traditional scouting with cutting-edge metrics to provide comprehensive insights.</p>
            <p>Let the numbers guide you to a deeper understanding of the games we love.</p>
        `
    }
];

// Podcasts data
const podcasts = [
    {
        icon: "🎙️",
        title: "The 303 Sports Show",
        description: "Your go-to source for sports talk, analysis, and debate. Join our hosts as they break down the biggest stories in sports every week.",
        link: "https://www.youtube.com/@The303SportsNetwork/playlists"
    },
    {
        icon: "🎧",
        title: "Inside the Game",
        description: "Intimate conversations with coaches, players, and sports insiders about what really happens behind closed doors.",
        link: "https://www.youtube.com/@The303SportsNetwork/playlists"
    },
    {
        icon: "📻",
        title: "Weekly Newscast",
        description: "Catch up on everything you missed this week in sports with our comprehensive weekly roundup and expert analysis.",
        link: "https://www.youtube.com/@The303SportsNetwork/playlists"
    },
    {
        icon: "🏈",
        title: "Gridiron Talk",
        description: "All football, all the time. From college to the pros, we cover every snap, every play, every game.",
        link: "https://www.youtube.com/@The303SportsNetwork/playlists"
    },
    {
        icon: "🏀",
        title: "Court Vision",
        description: "Basketball analysis and storytelling from the hardwood. Covering the NBA, college hoops, and everything in between.",
        link: "https://www.youtube.com/@The303SportsNetwork/playlists"
    },
    {
        icon: "⚾",
        title: "Diamond Talk",
        description: "America's pastime gets the full treatment. Baseball history, current events, and what's next for the game.",
        link: "https://www.youtube.com/@The303SportsNetwork/playlists"
    },
    {
        icon: "⚽",
        title: "The Pitch",
        description: "Soccer from around the world. Leagues, tournaments, and the beautiful game's biggest moments.",
        link: "https://www.youtube.com/@The303SportsNetwork/playlists"
    },
    {
        icon: "🎯",
        title: "Overtime",
        description: "Late-night sports discussion that goes beyond the headlines. Hot takes, bold predictions, and unfiltered opinions.",
        link: "https://www.youtube.com/@The303SportsNetwork/playlists"
    }
];

// Show home page
function showHome() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('articlesPage').style.display = 'none';
    window.scrollTo(0, 0);
}

// Show articles page
function showArticlesPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('articlesPage').style.display = 'block';
    
    // Generate all articles
    const grid = document.getElementById('allArticlesGrid');
    grid.innerHTML = articles.map((article, index) => `
        <div class="article-card" onclick="openArticle(${index})">
            <div class="article-image">${article.emoji}</div>
            <div class="article-content">
                <div class="article-category">${article.category}</div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <a href="#" class="read-more">Read More →</a>
            </div>
        </div>
    `).join('');
    
    window.scrollTo(0, 0);
}

// Open article modal
function openArticle(index) {
    const article = articles[index];
    document.getElementById('articleContent').innerHTML = article.content;
    document.getElementById('articleModal').style.display = 'block';
}

// Close article modal
function closeArticle() {
    document.getElementById('articleModal').style.display = 'none';
}

// Open podcast modal
function openPodcast(index) {
    const podcast = podcasts[index];
    document.getElementById('podcastContent').innerHTML = `
        <div style="margin-top: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${podcast.icon}</div>
            <h2 style="margin-bottom: 1rem; color: #1a1a1a;">${podcast.title}</h2>
            <p style="color: #666; margin-bottom: 2rem; line-height: 1.8;">${podcast.description}</p>
            <a href="${podcast.link}" target="_blank" style="background: #1a1a1a; color: white; padding: 1rem 2rem; border-radius: 4px; text-decoration: none; display: inline-block; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Listen Now</a>
        </div>
    `;
    document.getElementById('podcastModal').style.display = 'block';
}

// Close podcast modal
function closePodcast() {
    document.getElementById('podcastModal').style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function(event) {
    const articleModal = document.getElementById('articleModal');
    const podcastModal = document.getElementById('podcastModal');
    if (event.target == articleModal) {
        closeArticle();
    }
    if (event.target == podcastModal) {
        closePodcast();
    }
}

// Newsletter form
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.add('show');
    this.reset();
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 5000);
    console.log('Newsletter signup:', email);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
// --- TEXT ROTATION CAROUSEL ---
const words = ["Sports", "Football", "Basketball", "Baseball", "Soccer", "Hockey", "Analytics"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;

function animateHeroText() {
    const target = document.getElementById("rotate-text");
    if (!target) return; // Safety check

    const currentWord = words[wordIdx];
    
    if (isDeleting) {
        target.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
    } else {
        target.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
    }

    // Dynamic speed: deleting is faster than typing
    let typeSpeed = isDeleting ? 75 : 150;

    if (!isDeleting && charIdx === currentWord.length) {
        typeSpeed = 2000; // Pause at the end of the word
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        typeSpeed = 500; // Pause before starting next word
    }

    setTimeout(animateHeroText, typeSpeed);
}

// Start the animation
// Ensure the script waits for the HTML to load before starting
document.addEventListener('DOMContentLoaded', () => {
    animateHeroText();
});