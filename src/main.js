(function(){
  var ARROW = function(s){return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>';};
  var BACK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>';

  var projects = [
    {slug:'ibm',title:'IBM',kind:'Internship',category:'UX Research',tone:'lavender',symbol:'✳',description:'Conducting UX research and building tools to help product teams use the findings.'},
    {slug:'pudiyador',title:'Pudiyador',kind:'Capstone Project',category:'UX/UI Design and UX Research',tone:'sage',symbol:'✿',description:'A donor-focused website redesign for a nonprofit supporting communities in Chennai.'},
    {slug:'ours',title:'Ours',kind:'SI 511 Course Project',category:'Product Discovery',tone:'sage',symbol:'✿',description:'Helping roommates share chores without making one person manage the household.'},
    {slug:'handyman-calculator',title:'Handyman Calculator',kind:'Personal Project',category:'UX Research and UX/UI Design',tone:'blue',symbol:'✦',description:'A mobile redesign that makes everyday home-project math more intuitive.'},
    {slug:'chapala',title:'Chapala',kind:'SI 407 Course Project',category:'Website UX/UI Design',tone:'peach',symbol:'◡',description:'A website redesign for an Ann Arbor restaurant, focused on menu browsing and ordering online.'}
  ];

  // Routes use plain hashes: "" (home), "about", "extras", "work-<slug>"
  function route(){ return decodeURIComponent(location.hash.replace(/^#/,'')); }

  function home(){
    var im = function(c,f){ return '<img class="fl '+c+'" src="img/'+f+'" alt="">'; };
    var media = {
      ibm:''+im('cd-ibm-logo','ibm-logo-card.webp')+im('cd-ibm-bob','ibm-bob.webp'),
      pudiyador:''+im('cd-pd-a','pd-fig-home2-top.webp')+im('cd-pd-b','cover-pud-donate.webp'),
      ours:'<span class="cd-ph cd-o1"><img src="img/ours-screen-add.webp" alt=""></span><span class="cd-ph cd-o2"><img src="img/ours-screen-detail.webp" alt=""></span><span class="cd-ph cd-o3"><img src="img/ours-screen-swap.webp" alt=""></span>',
      chapala:'<span class="cd-blk"></span>'+im('cd-ch-a','cover-chapala-product.webp')+im('cd-ch-b','cover-chapala-menu.webp'),
      'handyman-calculator':''+im('cd-hm-b','cover-back.webp')+im('cd-hm-f','cover-front.webp')
    };
    var cards = projects.map(function(p){
      return '<a class="project-card" href="#work-'+p.slug+'">'+
        '<div class="project-art cd cd-'+p.slug+'"><h4 class="cd-t">'+p.title+'</h4>'+(media[p.slug]||'')+'</div>'+
        '<div class="project-meta"><div><h3>'+p.title+'</h3><p>'+p.kind+' · '+p.category.replace(/&/g,'&amp;')+'</p></div>'+ARROW(19)+'</div></a>';
    }).join('');
    return '<section class="hero">'+
      '<div class="hero-row"><div><h1>hi, i\'m <span class="nw">sanvika!<span class="hero-flower" aria-hidden="true">✿</span></span></h1>'+
      '<p class="hero-lead">I’m a product designer and UX researcher passionate about accessibility and simple design.</p>'+
      '<p class="hero-sub">Currently pursuing my Master’s in User Experience Design and Research @ the <span class="um">University of Michigan</span> <span class="goblue">(go blue)</span>. Prev @ IBM and @ CommunityAmerica Credit Union.</p>'+
      '<a class="pill" href="#about">more about me '+ARROW(16)+'</a></div>'+
      '<div class="hero-doodle" aria-hidden="true"><span class="doodle-center">☺</span><span class="doodle-sparkle">✳</span><span class="doodle-small">✦</span></div></div></section>'+
      '<section id="work" class="work-section"><div class="section-heading"><div><span class="eyebrow">the things i\'ve made</span><h2>selected work<span class="dot">.</span></h2></div><span class="section-count">01 — 0'+projects.length+'</span></div>'+
      '<div class="project-grid">'+cards+'</div></section>';
  }

  function about(){
    var SNAPS = [
      {f:'snap-stadium',c:'last first game',r:-2,t:'lavender'},
      {f:'snap-texas',c:'greetings from texas',r:1.8,t:'peach'},
      {f:'snap-pastries',c:'pastry research',r:-1.5,t:'mint'},
      {f:'snap-daily',c:'the michigan daily',r:2,t:'blue'},
      {f:'snap-sagrada',c:'sagrada família',r:-1.2,t:'lavender'},
      {f:'snap-houses',c:'pastel street',r:1.6,t:'peach'},
      {f:'snap-skc',c:'sporting kc',r:-1.8,t:'mint'},
      {f:'snap-skyline',c:'blue hour',r:1.4,t:'blue'},
      {f:'snap-fall',c:'fall on campus',r:-1.6,t:'peach'},
      {f:'snap-paint',c:'paint night',r:2,t:'lavender'}
    ];
    var esc = function(x){ return String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;'); };
    var snaps = SNAPS.map(function(n){
      return '<figure class="ab-snap tape-'+n.t+'" style="--r:'+n.r+'deg"><div class="ab-snap-img"><img src="img/'+n.f+'.webp" alt="'+esc(n.c)+'" width="800"></div></figure>';
    }).join('');
    return `<section class="inner-page about-page">
      <div class="ab-hero">
        <div class="ab-text"><span class="eyebrow">more about me</span>
          <h1>hi, I’m <span class="nw">sanvika!<span class="hero-flower" aria-hidden="true">✳</span></span></h1>
          <p class="inner-lead">I’m a UX researcher and product designer passionate about accessibility and simple design.</p>
          <ul class="ab-basics">
            <li><span>〽️</span>Currently pursuing my master’s in User Experience Design and Research (MSI) at the University of Michigan, after a UX Design major and Business Administration minor (2023–2026). Go Blue!</li>
            <li><span>🏟️</span>Kansas City native</li>
            <li><span>🗞️</span>Product Design Manager at The Michigan Daily</li>
          </ul>
        </div>
        <figure class="ab-photo"><img src="img/sanvika-headshot.webp" alt="Sanvika smiling in front of an orange building wall"></figure>
      </div>
      <div class="ab-panel story"><span class="eyebrow">how it started</span><h2>the curb cut effect<span class="dot">.</span></h2>
        <div class="ab-story"><p>In my first semester of college, I took a class called Introduction to Information, where I learned about the “curb cut effect.” It’s the idea that accommodations designed for one group often end up benefiting a much wider audience.</p>
        <p>That idea sparked my passion for human-centered design and its ability to create innovative solutions. I’ve been designing with it in mind ever since.</p></div>
</div>
      <div class="ab-panel lilac"><span class="eyebrow">snapshots</span><h2>from my camera roll<span class="dot">.</span></h2>
        <div class="ab-snaps">${snaps}</div></div>
      <div class="ab-panel mint"><span class="eyebrow">conversation starters</span><h2>ask me about<span class="dot">.</span></h2>
        <ul class="ab-ask"><li>Shark Tank</li><li>Geography</li><li>Legos</li><li>Matcha</li><li>F1</li><li>Marketing 302</li><li>Theme parks</li><li>Disney movies</li><li>Minimalism</li><li>Watching movies</li><li>Beli</li><li>Froyo</li><li>Creating itineraries</li></ul></div>
      <p class="ab-end"><a class="pill" href="#">see my work ${ARROW(16)}</a></p>
    </section>`;
  }

  function extras(){
    var items=[
      {t:'lilac',n:'01',h:'the michigan daily',p:'Product design projects from my work at The Michigan Daily.'},
      {t:'peach',n:'02',h:'past projects',p:'Design explorations and creative side quests.'},
      {t:'blue',n:'03',h:'and more',p:'Other things I make just for the love of creating.'}
    ];
    return '<section class="inner-page extras-page"><span class="eyebrow">the creative archives</span><h1>extras<span class="hero-flower">✳</span></h1>'+
      '<div class="extras-grid ex-grid">'+items.map(function(i){return '<div class="extra-card ex-card '+i.t+'"><span class="ex-n">'+i.n+'</span><h2>'+i.h+'</h2><p>'+i.p+'</p><span class="ex-soon">coming soon</span></div>';}).join('')+'</div></section>';
  }

  function caseStudy(p){
    if(p.slug==='handyman-calculator'){ return handyman(); }
    if(p.slug==='chapala'){ return chapala(); }
    if(p.slug==='pudiyador'){ return pudiyador(); }
    if(p.slug==='ibm'){ return ibm(); }
    if(p.slug==='ours'){ return ours(); }
    return '<article class="inner-page case-study"><a href="#" class="back">'+BACK+' back to work</a>'+
      '<span class="eyebrow">'+p.category.replace(/&/g,'&amp;')+'</span><h1>'+p.title+'<span class="hero-flower">✳</span></h1>'+
      '<p class="inner-lead">'+p.description+'</p>'+
      '<div class="case-cover '+p.tone+'"><span>'+p.symbol+'</span><strong>'+p.title+'</strong></div>'+
      '<div class="case-notice"><h2>the story is coming together ♡</h2><p>This is a placeholder for the full case study. We\'ll add the problem, your role, process, design decisions, final visuals, and outcomes using your real project material.</p></div></article>';
  }

  function handyman(){
    var img = function(src,alt){ return '<img src="img/'+src+'" alt="'+alt+'">'; };
    var quote = function(t){ return '<blockquote>“'+t+'”</blockquote>'; };
    var sec = function(id,eyebrow,title,inner){
      return '<section class="hm-sec" id="'+id+'"><span class="eyebrow">'+eyebrow+'</span><h2>'+title+'<span class="dot">.</span></h2>'+inner+'</section>';
    };
    var goal = function(n,t,d){ return '<div class="hm-card hm-goal"><span class="n">goal '+n+'</span><h3>'+t+'</h3><p>'+d+'</p></div>'; };
    var feat = function(t,d){ return '<div class="hm-card"><h3>'+t+'</h3><p>'+d+'</p></div>'; };
    var persona = function(o){
      return '<div class="hm-persona">'+
        '<div class="who">'+img(o.photo,o.alt)+'<h3>'+o.name+'</h3><span class="eyebrow">'+o.role+'</span></div>'+
        '<div class="hm-persona-body"><blockquote>“'+o.quote+'”</blockquote>'+
        '<div class="hm-persona-grid">'+
          '<div><h4>about</h4><p>'+o.about+'</p></div>'+
          '<div><h4>demographics</h4><ul class="hm-chips">'+o.demo.map(function(d){return '<li>'+d+'</li>';}).join('')+'</ul></div>'+
          '<div><h4>goals</h4><p>'+o.goals+'</p></div>'+
          '<div><h4>behavior + tools</h4><ul class="hm-list">'+o.behavior.map(function(d){return '<li>'+d+'</li>';}).join('')+'</ul></div>'+
          '<div><h4>pain points</h4><ul class="hm-list">'+o.pain.map(function(d){return '<li>'+d+'</li>';}).join('')+'</ul></div>'+
        '</div></div></div>';
    };
    var wire = function(src,alt,tag,title,txt){
      return '<div class="hm-wire"><div class="img">'+img(src,alt)+'</div><div class="txt"><h3>'+title+' <span class="hm-tag bad">'+tag+'</span></h3><p>'+txt+'</p></div></div>';
    };

    var hero =
      '<div class="hm-hero"><div class="hm-hero-text"><a href="#" class="back">'+BACK+' back to work</a>'+
      '<span class="eyebrow">mobile app · ux design + research</span>'+
      '<h1>the handyman calculator<span class="hero-flower">✦</span></h1>'+
      '<p class="inner-lead">Modernizing the UI for a leading construction app.</p></div>'+
      '<div class="hm-hero-art">'+img('hero-phone.webp','The redesigned Handyman Calculator home screen on a phone, showing search, pinned calculators and recently used calculators')+'</div>'+'</div>'+
      '<dl class="hm-meta">'+
        '<div><dt>timeline</dt><dd>April – June 2025</dd></div>'+
        '<div><dt>project type</dt><dd>UX/UI redesign and research project</dd></div>'+
        '<div><dt>my role</dt><dd>Sole UX/UI designer and researcher</dd></div>'+
        '<div><dt>worked with</dt><dd>The app’s original developer</dd></div>'+
      '</dl>';

    var overview = sec('overview','the project','overview',
      '<p class="hm-intro">The Handyman Calculator is one of the biggest apps in the construction space on the Google Play Store. Since 2008, it has been downloaded more than 2 million times. Recently it was removed from the Play Store because of its outdated design and technical standards.</p>'+
      '<p class="hm-intro">With thousands of users around the world, the app has a rare opportunity: modernizing a proven product. For this project, I worked directly with the app’s original developer as the only designer on the project. My goal was to design a recommendation for what the app should look like when it returns to the Play Store.</p>'+
      '<div class="hm-stat"><strong>2M+</strong><span>downloads since 2008, with users all over the world</span></div>');

    var process = sec('process','how i approached it','research + discovery',
      '<p class="hm-intro">I worked in three steps, starting with the person who knows the app best and ending with a close look at the screens themselves.</p>'+
      '<ol class="hm-steps">'+
        '<li><a href="#work-handyman-calculator" data-jump="interview"><span class="n">1</span><span class="l">Developer interview</span></a></li>'+
        '<li><a href="#work-handyman-calculator" data-jump="reviews"><span class="n">2</span><span class="l">User review analysis</span></a></li>'+
        '<li><a href="#work-handyman-calculator" data-jump="audit"><span class="n">3</span><span class="l">UX audit</span></a></li>'+
      '</ol>');

    var interview = sec('interview','step 1','interview with the original developer',
      '<p class="hm-intro">To guide my designs, I sat down one-on-one with the app’s original developer to understand his vision, the challenges the app faces today, and where it could improve.</p>'+
      '<div class="hm-two">'+
        '<div class="hm-card"><h3>what we covered</h3><ul class="hm-list">'+
          '<li>What users have historically been using the app for</li>'+
          '<li>Common user complaints</li>'+
          '<li>Access to customer emails and customer reviews</li>'+
        '</ul></div>'+
        '<div class="hm-card"><h3>what i took away</h3><ul class="hm-list">'+
          '<li>Simplicity and trustworthiness matter more than flashy design</li>'+
          '<li>The main goal of the project is better organization within the app</li>'+
        '</ul></div>'+
      '</div>');

    var reviews = sec('reviews','step 2','user review analysis',
      '<p class="hm-intro">To learn what users enjoyed and where they struggled, I analyzed 100+ user reviews and grouped what people were saying into themes.</p>'+
      '<div class="hm-three">'+
        '<div class="hm-card hm-col"><h3><span class="hm-tag bad">pain points</span></h3>'+
          '<h4>Complex design and lack of guidance</h4>'+
          quote('No tutorial for the different measurements.')+
          quote('I really just learn how to use it and… keeps you guessing')+
          quote('Overwhelming… but sometimes too much is a good thing :)')+
          '<h4>Accuracy errors</h4>'+
          quote('Diagonal calculator in the 3-4-5 rule… calculations are wrong.')+
          quote('Board foot calculator needs updating.')+
        '</div>'+
        '<div class="hm-card hm-col"><h3><span class="hm-tag good">what users loved</span></h3>'+
          '<h4>Versatility</h4>'+
          quote('Has every calculator you would ever need… beats pen and paper.')+
          quote('Amazing app for any carpenter… concrete, roof pitch, invoices—it’s all in there.')+
          '<h4>Practical impact</h4>'+
          quote('My material list is so accurate now… I can almost always count on minimum waste.')+
          quote('Improved my ability to give quick, precise estimates to my customers.')+
        '</div>'+
        '<div class="hm-card hm-col"><h3><span class="hm-tag mixed">mixed feedback</span></h3>'+
          '<h4>Usability</h4>'+
          quote('Very simple and straightforward.')+
          quote('Overwhelming for some… but add to favorites and it’s a breeze.')+
        '</div>'+
      '</div>');

    var audit = sec('audit','step 3','ux audit',
      '<p class="hm-intro">Next I audited the homepage and a sample calculator page against the 10 usability heuristics, annotating each screen as I went.</p>'+
      '<figure class="hm-shot">'+img('audit-home.webp','Annotated screenshots of the original app’s home and list screens with sticky-note usability findings')+'<figcaption>Annotated audit of the original home and list screens</figcaption></figure>'+
      '<figure class="hm-shot dark">'+img('audit-calc.webp','Annotated screenshots of original calculator pages with sticky-note usability findings')+'<figcaption>Annotated audit of the original calculator pages</figcaption></figure>'+
      '<h3 class="hm-sub">homepage design goals</h3>'+
      '<div class="hm-three">'+
        goal(1,'Make navigation intuitive','Labels should be simplified to increase user understanding. Abbreviations should be used sparingly and features should be grouped more logically.')+
        goal(2,'Use space purposefully','White space should be used more. Frequently used tools and recent actions should be highlighted from the start of a user’s experience with the app.')+
        goal(3,'Improve visual hierarchy','Call-to-action buttons need to stand out and look clickable. Visual clutter should be reduced and consistent styling should be prioritized.')+
      '</div>'+
      '<h3 class="hm-sub">calculator page design goals</h3>'+
      '<div class="hm-three">'+
        goal(1,'Improve readability','Margins and padding should be added to reduce visual clutter. Spacing and sizing should be consistent across all calculators.')+
        goal(2,'Communicate more clearly','Short descriptions of each calculator can help users understand what it does. Unclear disclaimers should be removed or reworded.')+
        goal(3,'Use consistent wording','Spelling and terminology should be standardized across all calculators.')+
      '</div>');

    var personas = sec('personas','who i designed for','user personas',
      '<p class="hm-intro">After the research, I saw two main types of users. The first uses the app for DIY home projects. The second is contractors who use it professionally to give quotes.</p>'+
      persona({photo:'laura.webp',alt:'Portrait of Laura, the DIY home improver persona',name:'Laura',role:'diy home improver',
        quote:'I don’t need many calculators, I just need 3 of them that I can easily find again if I need them. They need to be accurate and easy to use.',
        about:'Laura is a busy school teacher who owns a home. She is always working on home improvement projects on the weekends and has a long list of projects she wants to complete eventually.',
        demo:['Age 34','Los Angeles','Teacher','Tech comfort: moderate'],
        goals:'She aims to complete her DIY projects while staying on budget, and wants to avoid calling a contractor unless absolutely necessary.',
        behavior:['Uses her phone frequently during projects','Wants to quickly find tools later'],
        pain:['Finds measurement conversions and estimations confusing','Overwhelmed by too many technical terms']})+
      persona({photo:'marcus.webp',alt:'Portrait of Marcus, the professional contractor persona',name:'Marcus',role:'professional contractor',
        quote:'I need a tool that works as hard as I do. I need something that can do everything from calculations to invoices in one place.',
        about:'Marcus is an independent general contractor who has been in the field for over a decade. His days are site visits and meetings with clients, both homeowners and commercial.',
        demo:['Age 48','Orlando','Independent general contractor','Tech comfort: high'],
        goals:'He aims to deliver accurate quotes and build good relationships with clients. He needs to minimize waste and maximize profit.',
        behavior:['Uses tech at the job site','Uses calculators to plan orders, bill clients and make estimates'],
        pain:['Frustrated when tools are incorrect, which makes him doubt the technology','Loses time when he has to switch between tools']}));

    var iterations = sec('iterations','design process','homepage design',
      '<p class="hm-intro">I explored four versions of the homepage. Three were rejected for reasons that shaped the final design.</p>'+
      '<div class="hm-wires">'+
        wire('wire-v1.webp','Wireframe of version 1, a favorites screen with an empty list','rejected','V1','Newer users with no favorites would see a lot of empty space, which could give a false impression that the app has limited features.')+
        wire('wire-v2.webp','Wireframe of version 2, an all calculators list with a search bar and filter buttons','rejected','V2','Listing every calculator right away tends to overwhelm users, and the filter and favorites toggle is too hidden.')+
        wire('wire-v3.webp','Wireframe of version 3, a home screen with pinned and recently used lists','rejected','V3','All the features are prominent and more accessible. It was later decided that the app doesn’t need both a pinned and a favorites feature.')+
      '</div>'+
      '<div class="hm-final"><div class="txt"><h3>V4 <span class="hm-tag good">accepted</span></h3>'+
        '<p>The home screen shows the user’s pinned calculators if they have any. Below them are the last four calculators the user used. A search bar at the very top gives easy access to everything, and two buttons sit underneath it: “Advanced Search,” which lets users find a calculator through filters, and a button to view all calculators.</p></div>'+
        img('v4-phone.webp','The accepted version 4 home screen with search, two buttons, pinned calculators and recently used calculators')+'</div>');

    var finals = sec('final','the result','final designs + features',
      '<p class="hm-intro">The final recommendation covers browsing, search, collections and the calculator page itself.</p>'+
      '<figure class="hm-shot">'+img('final-1.webp','Three phone screens: the all calculators list, search suggestions for the word tile, and the advanced search screen')+'</figure>'+
      '<div class="hm-feat">'+
        feat('All calculators','When users tap “View All Calculators” on the homepage, an easy-to-scan list of every calculator comes up.')+
        feat('Search bar','The search bar at the top of the screen lets users find tools quickly with keyword search.')+
        feat('Advanced search','Tapping “Advanced Search” on the homepage lets users narrow their search with filters.')+
      '</div>'+
      '<figure class="hm-shot">'+img('final-2.webp','Three phone screens: the sort menu, the filters menu, and the community collections panel')+'</figure>'+
      '<div class="hm-feat">'+
        feat('Sort','In Advanced Search, users can sort in familiar ways, such as alphabetically or by popularity, to find the tool they want.')+
        feat('Filters','Users can filter by metric or imperial calculators. They can also filter by user-made collections.')+
        feat('Collections','Collections let users group calculators for a specific purpose. Other users can save those collections and use them as filters in Advanced Search.')+
      '</div>'+
      '<figure class="hm-shot">'+img('final-3.webp','Three phone screens of the redesigned square feet to cubic feet calculator: empty, with the keyboard open, and showing results')+'</figure>'+
      '<div class="hm-feat">'+
        feat('Description','Each calculator opens with a short description of what it does. This also helps with keyword search.')+
        feat('Simplified inputs','Input fields are more spread out and carry clear cues about what to enter.')+
        feat('Results display','Results appear apart from the inputs and are more prominent. The share and save buttons only appear once there’s a result.')+
      '</div>');

    var takeaways = sec('takeaways','looking back','takeaways',
      '<div class="hm-take">'+
        '<div class="hm-card"><h3>Business requirements</h3><p>I had to include components tied to the app’s business goals. One example is the Google Ad banner, something I wouldn’t normally think to add in a personal project.</p></div>'+
        '<div class="hm-card"><h3>The power of simple</h3><p>The final recommendation is simple and not very flashy, but it still does what the app is meant to do. I often hear that designers need to embrace simple designs more, and this project helped me understand that.</p></div>'+
        '<div class="hm-card"><h3>Qualitative analysis</h3><p>My main form of user research was the user reviews I analyzed. I tried different ways of finding themes in them, some more successful than others, and it gave me real experience working with qualitative data.</p></div>'+
      '</div>');

    var end = '<div class="hm-end"><a href="#" class="back" style="margin:0">'+BACK+' back to work</a><a class="pill" href="#about">more about me '+ARROW(16)+'</a></div>';

    return '<article class="inner-page case-study hm-case" style="max-width:none;min-height:0">'+hero+overview+process+interview+reviews+audit+personas+iterations+finals+takeaways+end+'</article>';
  }

  function chapala(){
    var fig = function(src,alt,cap,cls){ return '<figure class="cp-fig'+(cls?' '+cls:'')+'"><img src="img/'+src+'" alt="'+alt+'">'+(cap?'<figcaption>'+cap+'</figcaption>':'')+'</figure>'; };
    var sec = function(cls,eyebrow,title,inner){
      return '<section class="cp-sec '+cls+'"><span class="eyebrow">'+eyebrow+'</span><h2>'+title+'<span class="dot">.</span></h2>'+inner+'</section>';
    };
    var goal = function(n,t,items){ return '<div class="cp-goal"><span class="n">goal '+n+'</span><h3>'+t+'</h3><ul class="cp-list">'+items.map(function(i){return '<li>'+i+'</li>';}).join('')+'</ul></div>'; };
    var decision = function(n,title,text,chips,media){
      return '<div class="cp-decision"><div class="cp-d-text"><span class="n">decision '+n+'</span><h3>'+title+'</h3><p>'+text+'</p>'+
        (chips?'<ul class="cp-chips">'+chips.map(function(c){return '<li>'+c+'</li>';}).join('')+'</ul>':'')+'</div>'+
        '<div class="cp-d-media">'+media+'</div></div>';
    };
    var boards = [
      {tab:'Homepage',img:'cp-b-home.webp',alt:'Homepage designs for desktop and mobile in light and dark mode: a hero with the restaurant storefront, an About section, a photo grid, reviews and a footer'},
      {tab:'Menu',img:'cp-b-menu.webp',alt:'Menu page designs for desktop and mobile in light and dark mode, with category tabs, a search bar, filter tags and dish listings'},
      {tab:'Product page',img:'cp-b-product.webp',alt:'Product page designs for Asada Fries on desktop and mobile in light and dark mode, with collapsible Included, Add and Special Instructions sections'},
      {tab:'Cart',img:'cp-b-cart.webp',alt:'Cart designs on desktop and mobile in light and dark mode, listing two items with a subtotal, tax, total and a Proceed To Checkout button'},
      {tab:'Pickup time',img:'cp-b-checkout1.webp',alt:'Checkout step one on desktop and mobile in light and dark mode, with a popup asking for ASAP or scheduled pickup time'},
      {tab:'Checkout',img:'cp-b-checkout2.webp',alt:'Checkout step two on desktop and mobile in light and dark mode, with contact details, payment details, tip options and an order summary'},
      {tab:'Confirmation',img:'cp-b-confirm.webp',alt:'Order confirmation on desktop and mobile in light and dark mode, with an order progress bar reading Order Received and an order summary'},
      {tab:'404',img:'cp-b-404.webp',alt:'404 page designs on desktop and mobile in light and dark mode, with the headline Taco ’bout a missing page and a Return to Home button'}
    ];

    var hero =
      '<div class="cp-hero"><div class="cp-hero-text"><a href="#" class="back">'+BACK+' back to work</a>'+
      '<span class="eyebrow">website redesign · partner project</span>'+
      '<h1>chapala<span class="hero-flower">✳</span></h1>'+
      '<p class="inner-lead">Bringing the flavor of Mexico to the digital experience.</p>'+
      '<p class="cp-lede">Chapala is a Mexican restaurant in downtown Ann Arbor, Michigan. For a partner project in SI 407, we redesigned its website to be more intuitive, more accessible and more visually engaging, so it better reflects the energy of the restaurant itself.</p></div>'+
      '<div class="cp-hero-img"><img src="img/cp-hero.webp" alt="The redesigned Chapala homepage shown at an angle on a pink background, with the storefront photo, an About section and a photo grid"></div></div>'+
      '<dl class="cp-meta">'+
        '<div><dt>course</dt><dd>SI 407, University of Michigan</dd></div>'+
        '<div><dt>project type</dt><dd>Partner UX/UI design project</dd></div>'+
        '<div><dt>team + timeline</dt><dd>Annice Chang and Sanvika Inturi, January – March 2026</dd></div>'+
      '</dl>';

    var challenge = sec('lilac','the problem','the challenge',
      '<p class="cp-text">Chapala’s existing website had several usability and accessibility opportunities. The navigation repeated information, some text was embedded in images, which made it harder to read, and the menu and ordering experience could be more intuitive.</p>'+
      '<p class="cp-text">The site also didn’t fully capture the colorful, energetic atmosphere of the restaurant. Our goal was to make it easier for customers to discover dishes, customize their orders and understand their order progress.</p>'+
      '<div class="cp-about">'+
        '<div class="cp-card"><span class="eyebrow">the restaurant</span><h3>Bringing the flavor of Mexico to Ann Arbor</h3>'+
          '<p>Chapala is a vibrant downtown Ann Arbor restaurant serving authentic Mexican cuisine alongside a wide selection of cocktails and margaritas. Featuring specials such as:</p>'+
          '<ul class="cp-specials"><li><strong>Happy Hour</strong> 3–6PM everyday</li><li><strong>$10</strong> Monster Burrito Mondays</li><li><strong>$3</strong> Taco Tuesdays</li><li><strong>$12</strong> Quesadilla Wednesdays</li></ul></div>'+
        fig('cp-storefront.webp','The Chapala Mexican Restaurant storefront window with its colorful painted logo, framed by string lights and brick',null,'photo')+
      '</div>'+
      '<h3 class="cp-sub">project goals</h3>'+
      '<div class="cp-goals">'+
        goal(1,'Improve accessibility',['Remove text on images to improve readability','Ensure AA color contrast compliance','Use clear typography and hierarchy for scanning pages'])+
        goal(2,'Simplify the interface',['Reorganize the navigation bar with fewer options','Divide the menu into categories','Remove redundant information on pages'])+
        goal(3,'Improve functionality',['Online ordering platform within the site','Improve ordering discoverability through CTAs','Filtering and categories on menu pages'])+
        goal(4,'Reflect the in-person experience',['Bright, bold colors that mirror the restaurant atmosphere','Align website branding with the in-person identity'])+
      '</div>');

    var discovery = sec('plain','what we looked at','discovery + competitive analysis',
      '<p class="cp-text">We analyzed competing restaurant websites to understand common approaches to navigation, menu browsing, online ordering and how restaurant information is displayed. We compared a local direct competitor (Tios), a nationwide partial competitor (On The Border) and a local indirect competitor (Good Time Charley’s).</p>'+
      '<div class="cp-stack">'+fig('cp-competitors.webp','A comparison table of Tios, On The Border and Good Time Charley’s covering business type, homepage call to action, menu photos, hero section, hours and location, specials and menu format','Competitive analysis of three restaurant websites')+'</div>');

    var system = sec('panel','visual language','building the design system',
      '<p class="cp-text">We built a consistent visual language that keeps Chapala’s vibrant personality while staying readable and accessible. Type and color come straight from the restaurant’s brand identity.</p>'+
      '<div class="cp-stack">'+
        fig('chapala-typography.webp','Typography specimen showing Gluten as the primary font and Roboto as the secondary font, each with upper and lowercase alphabets and numerals','Gluten is the primary font and Roboto is the secondary font.')+
        fig('chapala-colors.webp','Color primitives: a primary pink-red scale, a secondary blue scale, green for success, red for errors and a greyscale, each from 50 to 950','Color primitives: primary, secondary, success, error and greyscale.')+
        fig('cp-b-home.webp','Homepage designs for desktop and mobile in light and dark mode','Responsive homepage explorations: desktop and mobile, in light and dark mode.','dark')+
      '</div>');

    var decisions = sec('plain','the strongest part','key design decisions',
      '<p class="cp-text">Three decisions shaped most of the redesign.</p>'+
      decision(1,'Making menu browsing easier',
        'We added search, filter tags and category navigation to the menu, so customers can find dishes without scrolling through the entire selection.',
        ['Favorite','Spicy','Recently added','Vegetarian'],
        fig('cp-menu-annotated.webp','Annotated menu page on a laptop. Notes point to a scrolling category bar that jumps to menu sections, a search bar for finding specific items, and filter tags for favorites, spicy, new and vegetarian dishes',null))+
      decision(2,'Making ingredient customization clearer',
        'Product pages show which ingredients are included by default, so customers know what comes with their order. Collapsible sections keep substitutions, additions and special instructions organized.',
        null,
        fig('cp-product-laptop.webp','Product page for Asada Fries on a laptop, with a photo, description, price and an Included list of six ingredients with checkboxes',null)+
        fig('cp-collapsible.webp','Annotated product page showing the Included list, a collapsed Add section, a collapsed Special Instructions section and an Add 1 Item button, with a note about collapsible menus for requesting substitutions and additions',null))+
      decision(3,'Improving visibility into order status',
        'After checkout, an order-tracking feature shows how the order is progressing, giving customers more transparency into where it stands.',
        null,
        fig('cp-tracker.webp','Annotated order confirmation page showing an Order Received progress bar with the time remaining, a thank you message and an order summary',null)));

    var finals = sec('blue','the result','final designs',
      '<p class="cp-text">The final website across desktop and mobile, in light and dark mode. Pick a page to look closer.</p>'+
      '<div class="cp-tabs" role="group" aria-label="Final design pages">'+
        boards.map(function(b,i){ return '<button type="button" class="cp-tab" data-tab="'+i+'" aria-pressed="'+(i===0?'true':'false')+'">'+b.tab+'</button>'; }).join('')+
      '</div>'+
      boards.map(function(b,i){ return '<figure class="cp-fig dark cp-board"'+(i===0?'':' hidden')+' data-board="'+i+'"><img src="img/'+b.img+'" alt="'+b.alt+'"><figcaption>'+b.tab+' · desktop and mobile, light and dark mode</figcaption></figure>'; }).join(''));

    var outcome = sec('mint','looking back','outcome + reflection',
      '<p class="cp-text">The project resulted in a responsive website redesign concept with improved menu discoverability, clearer ingredient customization and visibility into order status.</p>'+
      '<div class="cp-reflect pd-reflect" style="max-width:720px"><p>One of the biggest things I learned from the Chapala redesign was how much thought goes into deciding what information to prioritize on a website. For a restaurant, people may be visiting for different reasons, such as looking at the menu, checking the hours, or finding the location. This helped me think more about how the layout and navigation could make these tasks easier.</p><p>Additionally, I learned to explain why I was making a design change and connect it to what someone would need when visiting the website.</p><p>If I continued this project, I would want to test the redesigned site with more people to understand whether the changes actually made these tasks easier.</p></div>');

    var end = '<div class="cp-end"><a href="#" class="back" style="margin:0">'+BACK+' back to work</a><a class="pill" href="#about">more about me '+ARROW(16)+'</a></div>';

    return '<article class="inner-page case-study cp-case chapala-case" style="max-width:none;min-height:0">'+hero+challenge+discovery+system+decisions+finals+outcome+end+'</article>';
  }

  function pudiyador(){
    var sec = function(cls,eyebrow,title,inner){
      return '<section class="cp-sec '+cls+'"><span class="eyebrow">'+eyebrow+'</span><h2>'+title+'<span class="dot">.</span></h2>'+inner+'</section>';
    };
    var fig = function(src,alt,cap,cls){ return '<figure class="cp-fig'+(cls?' '+cls:'')+'"><img src="img/'+src+'" alt="'+alt+'">'+(cap?'<figcaption>'+cap+'</figcaption>':'')+'</figure>'; };
    var hero = `
      <div class="cp-hero pd-hero"><div class="cp-hero-text"><a href="#" class="back">${BACK} back to work</a>
      <span class="eyebrow">ux research + product design</span>
      <h1>pudiyador<span class="hero-flower">✿</span></h1>
      <p class="inner-lead">Designing for trust, from first impression to donation.</p>
      <p class="cp-lede">Pudiyador is a nonprofit supporting underserved communities in Chennai, India, through educational and community development programs. For our SI 497 capstone at the University of Michigan, our team redesigned its website to communicate its mission, build trust with potential donors, and make programs and donation easier to navigate.</p></div>
      <div class="pd-hero-img"><img src="img/pd-fig-hero.webp" alt="Redesigned Pudiyador homepage"></div></div>
      <dl class="cp-meta">
        <div><dt>context</dt><dd>SI 497 Capstone, University of Michigan</dd></div>
        <div><dt>project type</dt><dd>Nonprofit client project</dd></div>
        <div><dt>my role</dt><dd>UX Researcher and Product Designer</dd></div>
        <div><dt>team</dt><dd>Sanvika Inturi, Katherine Saperston, Nicholas Alexander and Carolina Janicke</dd></div>
      </dl>`;

    var challenge = sec('plain','01 · the challenge','Helping potential donors understand, trust, and support Pudiyador',`
      <div class="pd-two">
        <div>
          <p class="cp-text">Pudiyador serves under-served communities in Chennai through a cradle-to-college framework. Much of its engagement and donor support came through word-of-mouth rather than its digital platforms, which made the website a key first touchpoint for potential donors.</p>
          <p class="cp-text">The problem wasn’t only that the site needed to look better. Visitors needed to understand the mission, find information about programs, judge the organization’s credibility, and feel comfortable taking the next step toward donating.</p>
          <div class="pd-hmw"><span class="eyebrow">how might we</span><p>How might we help potential donors understand Pudiyador’s mission, build confidence in its impact, and navigate the donation process with greater clarity?</p></div>
        </div>
        <div class="pd-orig"><span class="eyebrow">the existing website</span>
          ${fig('pd-orig-home.webp','Original Pudiyador homepage with embedded video and program overview','Original homepage','pd-orig-fig')}
          ${fig('pd-orig-donate.webp','Original Pudiyador donation page','Original donation page','pd-orig-fig')}
        </div>
      </div>`);

    var discovery = sec('beige','02 · understanding donor needs','Before redesigning, we needed to understand what builds donor trust',`
      <div class="pd-methods">
        <div class="cp-card"><span class="pd-n">4</span><h3>Heuristic evaluations</h3><p>Four UX students independently reviewed the site against Nielsen’s 10 heuristics, rating severity to surface interface and credibility problems users may not mention themselves.</p></div>
        <div class="cp-card"><span class="pd-n">17</span><h3>Donor survey</h3><p>Prior donors with disposable income shared what motivates giving, what builds trust, and what they expect from nonprofit sites.</p></div>
        <div class="cp-card"><span class="pd-n">5</span><h3>Usability tests</h3><p>Thirty-minute remote Zoom sessions showed how people actually navigated the existing site, explored programs and attempted to donate.</p></div>
        <div class="cp-card"><span class="pd-n">↳</span><h3>Affinity mapping</h3><p>Findings from the evaluations and tests were grouped to find recurring usability issues, then prioritized by severity and frequency.</p></div>
      </div>
      <h3 class="cp-sub">what we found</h3>
      <div class="pd-finds">
        <div class="pd-find"><span class="pd-big">15<small>/17</small></span><h3>Emotional connection motivates giving</h3><p>Survey respondents named emotional connection as a reason they donate. That put the mission and its human impact at the center of the redesign.</p></div>
        <div class="pd-find"><span class="pd-big">14<small>/17</small></span><h3>Transparency builds confidence</h3><p>Respondents valued transparency, and unclear fund usage was a barrier for 11 of 17. Impact, program details and donation paths needed to be easier to understand.</p></div>
        <div class="pd-find"><span class="pd-big">4<small>/5</small></span><h3>Key information was hard to find</h3><p>Four of five usability participants hit homepage or navigation problems, such as a mission that wasn’t prominent and labels like “Media” and “Communities” that were unclear.</p></div>
      </div>
      <div class="pd-two pd-evid">
        ${fig('pd-affinity-heuristic.webp','Affinity map of heuristic evaluation findings','Affinity map: heuristic evaluation findings')}
        ${fig('pd-affinity-usability.webp','Affinity map of usability testing findings','Affinity map: usability testing findings')}
      </div>
      <p class="cp-note">Sample sizes are small: 17 survey respondents and 5 usability participants. We treated the results as directional.</p>`);

    var req = sec('plain','03 · turning research into design requirements','Translating insights into a clearer donor journey',`
      <p class="cp-text">Survey findings pointed to donors who weigh mission clarity, transparency and evidence of impact before giving, while approaching nonprofits with some skepticism. We captured this in two personas and a donor journey map, then wrote design requirements.</p>
      <div class="pd-two pd-personas">
        ${fig('pd-persona-maya.webp','Persona: Maya Patel','Persona: Maya Patel')}
        ${fig('pd-persona-daniel.webp','Persona: Daniel Rodriguez','Persona: Daniel Rodriguez')}
      </div>
      ${fig('pd-journey.webp','Pudiyador donor journey map across awareness, consideration, decision, service and loyalty','Donor journey map: emotional highs and lows from awareness to loyalty, with pain points and solutions at each stage','pd-journey-fig')}
      <h3 class="cp-sub">from finding to design response</h3>
      <div class="pd-chain">
        <div class="pd-row pd-head"><span>research finding</span><span>user need</span><span>design response</span></div>
        <div class="pd-row"><div><b>Mission was hard to find.</b> 4/5 testers had homepage or navigation issues; 11/17 survey respondents look for the mission first.</div><div>Understand the organization right away</div><div>Mission statement at the top of the homepage, supported by impact metrics</div></div>
        <div class="pd-row"><div><b>Transparency matters.</b> 14/17 value it; 11/17 cite unclear fund usage as a barrier.</div><div>See how donations are used and what they achieve</div><div>Requirements for donation transparency, impact stories and visible impact statistics</div></div>
        <div class="pd-row"><div><b>External redirects came without warning.</b> A high-priority heuristic issue; 3/5 testers were confused by donation types and payment options.</div><div>Predictability and reassurance when giving</div><div>Donation types more visible; users told before they’re sent to an external platform</div></div>
        <div class="pd-row"><div><b>Program content was confusing to navigate.</b> Testers struggled with content organization.</div><div>Explore programs without extra effort</div><div>Organized program information that needs minimal navigation</div></div>
      </div>
      <h3 class="cp-sub">prioritized design requirements</h3>
      <div class="pd-reqs">
        <div class="pd-req must"><span class="pd-tag">must have</span>
          <div><b>Establish trust and credibility early</b><p>Communicate legitimacy and transparency within the first 1–2 minutes. 11/17 cited uncertainty about fund usage, and fear of scams was a top barrier.</p></div>
          <div><b>Clearly communicate mission and impact</b><p>Users should quickly understand what Pudiyador does, who it serves and what impact it creates. 11/17 look for the mission first, and testers struggled to find it.</p></div>
          <div><b>Increase transparency around fund usage</b><p>Reduce ambiguity about how donations are allocated. Transparency was the strongest trust indicator (14/17); unclear fund usage was the most cited barrier (11/17).</p></div>
          <div><b>Reduce friction in donation-related flows</b><p>Testing revealed navigation confusion, unclear payment options and limited feedback, which delayed decisions.</p></div>
        </div>
        <div class="pd-req should"><span class="pd-tag">should have</span>
          <div><b>Support emotional engagement through storytelling</b><p>Emotional connection was the strongest donation motivator (15/17), and testers responded well to success stories once they found them.</p></div>
          <div><b>Improve information architecture and content hierarchy</b><p>4/5 usability participants were confused navigating categories and labels.</p></div>
        </div>
        <div class="pd-req nice"><span class="pd-tag">nice to have</span>
          <div><b>Support ongoing donor engagement and return visits</b><p>Meaningful confirmation and occasional impact reporting can strengthen long-term trust and repeat giving.</p></div>
        </div>
      </div>`);

    var process = sec('sand','04 · from ideas to interface','Designing a more intuitive experience',`
      <p class="cp-text">We prioritized the pages with the strongest evidence from research: the homepage, donation flow, programs overview and individual program pages, mission, communities, and news. We mapped the site structure and two donor flows, sketched by hand, then moved into low-fidelity wireframes and high-fidelity prototypes. Usability testing throughout simplified labels, made impact and credibility signals more visible, and clarified donation flows.</p>
      <div class="pd-sketches">
        ${fig('pd-sketch-1.webp','Hand-drawn sketch of homepage layout','')}
        ${fig('pd-sketch-2.webp','Hand-drawn sketches of page layouts','')}
        ${fig('pd-sketch-3.webp','Hand-drawn sketches of program pages','')}
      </div>
      <p class="cp-cap">Paper sketches of homepage and program layouts</p>
      ${fig('pd-lofi.webp','Low-fidelity wireframes of homepage and programs','Low-fidelity wireframes: homepage and programs layouts','pd-wide')}
      <div class="pd-two pd-flows">
        ${fig('pd-sitemap.webp','Site map: Homepage to Programs, Communities, News and Donate','Interaction site map')}
        <div class="pd-flowtext"><h3>Two donor flows</h3><p>A <b>first-time donor</b> lands on the homepage, reviews the mission and impact metrics, explores programs, checks credibility through trust signals, then proceeds to donate.</p><p>A <b>returning donor</b> revisits, checks updated impact information, and goes straight to donation with minimal friction.</p></div>
      </div>
      ${fig('pd-flow-first.webp','First-time donor flow diagram','First-time donor flow','pd-wide')}
      ${fig('pd-flow-return.webp','Returning donor flow diagram','Returning donor flow','pd-wide')}`);

    var decision = function(n,title,problem,response,link,media){
      return `<div class="cp-decision"><div class="cp-d-text"><span class="eyebrow">decision ${n}</span><h3 class="pd-dh">${title}</h3>
        <dl class="pd-prl"><div><dt>the problem</dt><dd>${problem}</dd></div><div><dt>our response</dt><dd>${response}</dd></div><div><dt>grounded in</dt><dd>${link}</dd></div></dl></div>
        <div class="cp-d-media">${media}</div></div>`;
    };
    var decisions = sec('plain','05 · key design decisions','What we changed, and why',
      decision(1,'Making the mission immediately visible',
        'Testers struggled to locate mission information, and the homepage was cluttered with competing elements and no “Donate” call-to-action.',
        'The redesigned homepage places the mission statement at the top, supported by clear impact metrics, with less visual clutter and more storytelling.',
        '11/17 survey respondents look for the mission first; 15/17 read it before donating.',
        '<div class="pd-split"><figure class="cp-fig pd-scroll" tabindex="0" aria-label="Scrollable full homepage design"><img src="img/pd-fig-home2.webp" alt="Redesigned homepage, full length"><figcaption>Redesigned homepage · scroll the frame</figcaption></figure>'+
        '<ul class="pd-notes"><li><b>Mission first.</b> A “Creating Lasting Change” mission section sits directly below the hero.</li><li><b>A visible call-to-action.</b> “Donate” and “Get Involved” appear in the hero and header; testers previously found no “Donate Now” on the homepage.</li><li><b>Impact at a glance.</b> A band of impact numbers follows: 15+ years of support, 8 communities served, 800+ children impacted, 100+ families empowered.</li><li><b>Less clutter.</b> Content is separated into clear bands: mission, programs, impact, FAQ and a closing call to join.</li></ul></div>')+
      decision(2,'Making programs easier to explore',
        'Users were confused by content organization, and labels like “Communities” were unclear.',
        'Programs are organized into a clear overview with “Learn More” paths to individual pages, and Playquity is highlighted as a flagship initiative. Navigation labels were simplified.',
        'Usability testers found content engaging but struggled to locate it initially.',
        '<div class="pd-two pd-frames"><figure class="cp-fig pd-scroll" tabindex="0" aria-label="Scrollable programs page design"><img src="img/pd-fig-programs.webp" alt="Redesigned Programs page"><figcaption>Programs overview · scroll the frame</figcaption></figure><figure class="cp-fig pd-scroll" tabindex="0" aria-label="Scrollable program detail design"><img src="img/pd-fig-playquity.webp" alt="Playquity program page"><figcaption>Program detail (Playquity) · scroll the frame</figcaption></figure></div>')+
      decision(3,'Building trust through transparency',
        'Donors hesitate when they can’t see where money goes or whether the organization is credible. Unclear fund usage and fear of fraud were each cited by 11/17 respondents.',
        'We made impact and credibility signals more visible, and added a “Pudiyador in the News” page as external validation.',
        '8/17 survey respondents look for third-party validation; 14/17 value transparency.',
        '<div class="pd-two pd-trust">'+fig('pd-fig-impact.webp','Impact numbers band on the redesigned homepage','Impact numbers on the homepage')+fig('pd-fig-news.webp','Pudiyador in the News page with six articles','“Pudiyador in the News” page')+'</div>')+
      decision(4,'Making donation pathways more predictable',
        'Users were redirected to external platforms without warning, and were confused by donation types and payment options.',
        'Donation types are more visible, and users are explicitly told before they leave for an external platform. They can continue or go back.',
        'A high-priority heuristic finding, plus donation-flow confusion for 3/5 usability testers. These are proposed designs, not a built payment flow.',
        '<div class="pd-two pd-donate">'+fig('pd-donate-options.webp','Donation options page','Donation options')+fig('pd-donate-paypal.webp','One-time donation via PayPal page with redirect notice','Notice before redirecting to PayPal')+'</div>'));

    var evalSec = sec('beige','06 · evaluating the redesign','Did the redesign actually make a difference?',`
      <p class="cp-text">We ran a comparative usability study with 10 participants: a between-subjects design with 5 on the existing website and 5 on the redesigned Figma prototype, doing the same tasks. We measured completion, ease and confidence. These are small groups, so the results are directional, not statistically established.</p>
      <div class="pd-feature">
        <span class="eyebrow">featured result · finding Pudiyador’s mission</span>
        <div class="pd-bars">
          <div class="pd-bar"><div class="pd-track"><div class="pd-fill a" style="height:60%"></div></div><b>3 of 5</b><span>existing website · 60%</span></div>
          <div class="pd-bar"><div class="pd-track"><div class="pd-fill b" style="height:80%"></div></div><b>4 of 5</b><span>redesigned prototype · 80%</span></div>
        </div>
        <p class="cp-note">One more participant succeeded in the redesign. That’s encouraging, but not proof.</p>
      </div>
      <h3 class="cp-sub">task completion, by task</h3>
      <div class="pd-tablewrap"><table class="pd-table"><thead><tr><th>task</th><th>existing site</th><th>redesign</th></tr></thead><tbody>
        <tr><td>Finding the mission</td><td>3/5</td><td class="up">4/5</td></tr>
        <tr><td>Donating in USD</td><td>5/5</td><td>5/5</td></tr>
        <tr><td>Learning about programs</td><td>4/5</td><td class="dn">3/5</td></tr>
        <tr><td>Learning who/where Pudiyador serves</td><td>2/5</td><td class="up">3/5</td></tr>
        <tr><td>Follow-up: external site redirect</td><td>0/5</td><td class="na">not listed</td></tr>
        <tr><td>Follow-up: find the flagship program</td><td>0/5</td><td class="na">not listed</td></tr>
      </tbody></table></div>
      <p class="cp-note">The redesign’s programs task was worded “programs / find the key program,” so that row isn’t a perfect match. The report lists no separate follow-up rows for the prototype.</p>
      <h3 class="cp-sub">ease and confidence</h3>
      <div class="pd-tablewrap"><table class="pd-table"><thead><tr><th>task</th><th colspan="2">existing site (ease / confidence)</th><th colspan="2">redesign (ease / confidence)</th></tr></thead><tbody>
        <tr><td>Finding the mission</td><td>1.6</td><td>1.6</td><td>0.75</td><td>1.25</td></tr>
        <tr><td>Donating in USD</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
        <tr><td>Learning about programs</td><td>2.6</td><td>3</td><td>0.75</td><td>0.75</td></tr>
        <tr><td>Learning who/where Pudiyador serves</td><td>4</td><td>4.4</td><td>0.75</td><td>2.2</td></tr>
      </tbody></table></div>
      <p class="cp-note">Lower is better (1 = extremely easy / confident, 5 = extremely difficult / unconfident). Values are shown exactly as reported; some redesign averages fall below the 1–5 scale’s minimum, so read them as a favorable direction, not precise measurements.</p>
      <h3 class="cp-sub">what we learned</h3>
      <div class="pd-learn">
        <div class="cp-card"><h3>Promising</h3><p>Mission clarity improved, and the redesign got more favorable ease and confidence ratings across several tasks. On the existing site, people completed tasks but lacked confidence in their understanding.</p></div>
        <div class="cp-card"><h3>Mixed</h3><p>Basic actions like donating worked in both versions. Completion for the programs task went from 4/5 to 3/5, and the redesign’s “who/where” confidence rating stayed the weakest.</p></div>
        <div class="cp-card"><h3>Still to refine</h3><p>Some minor confusion remained in deeper navigation, and labeling and hierarchy could be refined further.</p></div>
      </div>`);

    var deliver = sec('sky','07 · final deliverables and outcome','A stronger foundation for Pudiyador’s digital experience',`
      <p class="cp-text">We delivered research findings, design requirements, and a Figma prototype with a redesigned information architecture. Per the report’s implementation readiness assessment:</p>
      <div class="pd-ready">
        <div class="cp-card"><span class="pd-tag ok">ready for implementation</span><p><b>Homepage, Programs page and the NavBar component</b> were revised after usability testing and are ready to implement.</p></div>
        <div class="cp-card"><span class="pd-tag wip">needs refinement</span><p><b>Donation, Communities and News pages</b> need further design and prototyping to align with the updated components and visual design.</p></div>
      </div>
      <div class="pd-gallery">
        <figure class="cp-fig"><div class="pd-g pd-scroll" tabindex="0"><img src="img/pd-fig-home2.webp" alt="Redesigned homepage"></div><figcaption><span class="pd-tag ok">ready</span> Homepage</figcaption></figure>
        <figure class="cp-fig"><div class="pd-g pd-scroll" tabindex="0"><img src="img/pd-fig-programs.webp" alt="Redesigned programs page"></div><figcaption><span class="pd-tag ok">ready</span> Programs</figcaption></figure>
        <figure class="cp-fig"><div class="pd-g pd-scroll" tabindex="0"><img src="img/pd-fig-donate.webp" alt="Donation page"></div><figcaption><span class="pd-tag wip">needs refinement</span> Donation</figcaption></figure>
        <figure class="cp-fig"><div class="pd-g pd-scroll" tabindex="0"><img src="img/pd-fig-communities.webp" alt="Our Communities page"></div><figcaption><span class="pd-tag wip">needs refinement</span> Communities</figcaption></figure>
        <figure class="cp-fig"><div class="pd-g pd-scroll" tabindex="0"><img src="img/pd-fig-news.webp" alt="News page"></div><figcaption><span class="pd-tag wip">needs refinement</span> News</figcaption></figure>
      </div>
      <p class="cp-note">Scroll inside each frame to see the full page. The NavBar component is also ready for implementation.</p>
      </div>`);

    var impact = sec('sand','after the project','Beyond the Capstone: Real-World Impact',`
      <div class="pd-impact"><div class="pd-impact-text">
        <p class="cp-text" style="margin-top:18px">Several months after the project, Pudiyador launched a 25th-anniversary page informed by the designs and ideas our team shared. The organization also communicated plans for a broader website redesign.</p>
        <blockquote class="pd-quote"><p>“Building on the designs and ideas you shared with us, we recently put together a page for Pudiyador’s 25th anniversary: www.pudiyador.org/25”</p><cite>Pudiyador, message to our team, October 2026</cite></blockquote>
        <blockquote class="pd-quote"><p>“We’re also planning a full revamp of our website, and I’ll show you guys how it turns out once it’s done.”</p><cite>Pudiyador, message to our team, October 2026</cite></blockquote>
        <p class="cp-text">The anniversary page was created by Pudiyador. Our team’s connection to it comes from the client’s own account. The full website redesign is planned and has not launched.</p>
        <p style="margin:24px 0 0"><a class="pill" href="https://www.pudiyador.org/25" target="_blank" rel="noopener">view the 25th anniversary page ${ARROW(16)}</a></p></div>
        <figure class="cp-fig pd-shot-img"><button type="button" class="ou-zoom" aria-label="Enlarge: Pudiyador 25th anniversary page"><img src="img/pd-25-page.webp" alt="Excerpt of Pudiyador’s 25th anniversary page with ways to give a gift or give time, and giving options including monthly amounts, PayPal Giving Fund, bank transfer and check"></button><figcaption>Excerpt from Pudiyador’s 25th anniversary page at pudiyador.org/25, created by Pudiyador.</figcaption></figure>
      </div>`);

    var reflect = sec('plain','08 · reflection','What this project taught me',`
      <div class="cp-reflect pd-reflect" style="max-width:720px"><p>One of the biggest things I learned from my capstone project was how to work with a client and consider what they would actually be able to use after the project ended. Working with Pudiyador helped me think more about how our designs could support the organization’s goals and communicate its work to people visiting the website.</p><p>Additionally, I learned how much responsibility comes with keeping a team project moving and making sure the different parts come together. Hearing that Pudiyador later used our designs and ideas to help create their 25th anniversary page was especially meaningful because it showed that our work continued to be useful after the course ended.</p></div>`);

    var end = '<div class="cp-end"><a href="#" class="back" style="margin:0">'+BACK+' back to work</a><a class="pill" href="#about">more about me '+ARROW(16)+'</a></div>';
    return '<article class="inner-page case-study cp-case pd-case" style="max-width:none;min-height:0">'+hero+challenge+discovery+req+process+decisions+evalSec+deliver+impact+reflect+end+'</article>';
  }

  function ibm(){
    var sec = function(cls,eyebrow,title,inner){ return '<section class="cp-sec '+cls+'"><span class="eyebrow">'+eyebrow+'</span><h2>'+title+'<span class="dot">.</span></h2>'+inner+'</section>'; };
    var P = function(t){ return '<p class="cp-text">'+t+'</p>'; };
    var shot = function(f,alt){ return '<figure class="ibm-fig ibm-shot"><img src="img/'+f+'" alt="'+alt+'" width="1600"><figcaption>Blurred for confidentiality.</figcaption></figure>'; };
    var bob = '<div class="ibm-fig ibm-band ibm-bob"><img src="img/ibm-bob-card.webp" alt="IBM Bob mascot, a friendly robot in a blue hard hat" width="1476" height="520"></div>';
    var hero = `
      <div class="cp-hero ibm-hero"><div class="cp-hero-text"><a href="#" class="back">${BACK} back to work</a>
      <span class="eyebrow">ux research · internship</span>
      <h1>ibm<span class="hero-flower">✳</span></h1>
      <p class="inner-lead">Conducting UX research and building tools to help product teams use the findings.</p></div>
      <div class="ibm-hero-art"><img src="img/ibm-logo-card.webp" alt="IBM logo" width="1476" height="708"></div></div>
      <dl class="cp-meta">
        <div><dt>my role</dt><dd>UX Design and Research Intern</dd></div>
        <div><dt>team</dt><dd>Product Experience – Automation Pillar</dd></div>
        <div><dt>timeline</dt><dd>Summer 2026</dd></div>
      </dl>`;
    var bg = sec('plain','background','Internship background',
      P('Before my internship at IBM, I mostly associated UX research with interviewing people and using their feedback to inform design decisions. However, working on a research enablement team helped me understand how much goes into conducting research and making the findings useful to others.')+
      P('My work involved research sprints, competitive research, an interactive survey dashboard, and a hypothesis evidence review. Additionally, I collaborated on a prototype during an internal hackathon.'));
    var sprints = sec('lilac','project 01','Research sprints',
      P('I led end-to-end UX research across two research sprints, conducting user sessions and partnering with four product teams working on enterprise infrastructure software, including HashiCorp products.')+
      P('My responsibilities included recruiting participants, facilitating sessions, and synthesizing findings.')+
      P('During synthesis, I connected what we learned to the questions each team was investigating. This helped me think about what context someone would need to understand the findings if they had not attended the sessions.'));
    var dash = sec('plain','project 02','Competitive research and survey dashboard',
      P('I conducted competitive research across seven infrastructure lifecycle management products and piloted a comparative survey. The survey used a jobs-to-be-done approach to understand what people were trying to accomplish and their experiences with different platforms.')+
      P('I also built a live, interactive dashboard that brought together respondent information, platform comparisons, and reasons for choosing a platform.')+
      shot('ibm-dashboard-blur.webp','Blurred view of the interactive survey dashboard, showing a header with summary tiles, tabs, and grouped bar charts')+
      P('Building the dashboard involved both research and design. I had to consider how someone unfamiliar with the survey would navigate the results and what context they would need to interpret them.'));
    var hyp = sec('mint','project 03','Hypothesis evidence review',
      P('I reviewed hypotheses against all existing research that my team had and used IBM Bob to help generate a report showing the supporting evidence and where more research was needed.')+
      shot('ibm-evidence-blur.webp','Blurred view of the hypothesis evidence review, showing a summary, evidence-strength labels and a table')+
      P('One of my biggest takeaways was how carefully I needed to consider whether a source supported a specific claim. Additionally, this project helped me understand how existing research could be used to investigate new questions.'));
    var hack = sec('lilac','project 04','Critical user journey evaluation',
      P('During an internal hackathon, I collaborated with designers and researchers to prototype a tool for evaluating wireframes against critical user journeys, which describe important tasks someone needs to complete with a product.')+
      bob+
      P('The prototype explored how AI could help assess whether wireframes supported those tasks. This gave me another perspective on how research could inform design evaluation across multiple screens.'));
    var learned = sec('plain','looking back','What I learned',
      P('One of the biggest things I learned was how many different forms UX research can take. The sprints gave me experience conducting research, while the dashboard helped me think about how others would explore the results. Additionally, the evidence review and hackathon showed me different ways research could support product and design decisions.')+
      P('Working on a research enablement team made me more interested in designing ways for people to understand research and apply it to their work.'));
    var more = sec('panel','confidentiality','Interested in learning more?',
      P('Some details of this work are confidential, so I’ve focused on my contributions and process here. Please contact me to learn more about my experience within what I’m able to share.')+
      '<p style="margin:22px 0 0"><a class="pill" href="mailto:sanvikai@umich.edu">contact me '+ARROW(16)+'</a></p>');
    var end = '<div class="cp-end"><a href="#" class="back" style="margin:0">'+BACK+' back to work</a><a class="pill" href="#work-pudiyador">next: pudiyador '+ARROW(16)+'</a></div>';
    return '<article class="inner-page case-study cp-case ibm-case" style="max-width:none;min-height:0">'+hero+bg+sprints+dash+hyp+hack+learned+more+end+'</article>';
  }

  function ours(){
    var DEMO_EMBED='https://drive.google.com/file/d/1n6Tj9N36K-U-Ua2sFYWNLFtRSnRJe8wo/preview';
    var DEMO_VIEW='https://drive.google.com/file/d/1n6Tj9N36K-U-Ua2sFYWNLFtRSnRJe8wo/view?usp=sharing';
    var PROTO_URL='https://error-less-29259215.figma.site';
    var PROTO_EMBED=PROTO_URL;
    var slot = function(file,label,alt,ratio){
      return '<figure class="ou-fig"><button type="button" class="ou-zoom" data-zoom="'+file+'" aria-label="Enlarge: '+label+'"><span class="ou-slot" style="aspect-ratio:'+(ratio||'16/10')+'" role="img" aria-label="'+alt+'"><strong>image to add</strong><em>'+file+'</em></span></button><figcaption>'+label+'</figcaption></figure>';
    };
    var fig = function(file,label,alt,cls){
      return '<figure class="ou-fig'+(cls?' '+cls:'')+'"><button type="button" class="ou-zoom" aria-label="Enlarge: '+label+'"><img src="img/'+file+'" alt="'+alt+'"></button><figcaption>'+label+'</figcaption></figure>';
    };
    var P = function(t){ return '<p>'+t+'</p>'; };
    var sec = function(title,inner){ return '<section class="ou-sec"><h2>'+title+'</h2>'+inner+'</section>'; };
    var prose = function(inner){ return '<div class="ou-prose">'+inner+'</div>'; };
    var member = function(n){ return '<li>'+n+'</li>'; };
    var hero = `
      <div class="ou-hero"><a href="#" class="back">${BACK} back to projects</a>
      <span class="eyebrow">product discovery · ux research</span>
      <h1>ours<span class="hero-flower" aria-hidden="true">✳</span></h1>
      <p class="inner-lead">An app concept to help young adults living with roommates manage their shared household responsibilities.</p></div>
      <dl class="ou-meta">
        <div class="wide"><dt>my role</dt><dd>Product discovery and UX research. I helped write our interview questions, created the customer journey map, service blueprint, and desirability narrative, and conducted concept tests.</dd></div>
        <div><dt>team</dt><dd><ul class="ou-team">${['Sanvika Inturi','Hugo Aca-Zayas','Roger Briddick','Jialin Wu'].map(member).join('')}</ul></dd></div>
        <div><dt>timeline</dt><dd>Fall 2026, SI 511 Product Discovery</dd></div>
        <div><dt>tools</dt><dd>FigJam, Figma Make, and Google Forms</dd></div>
      </dl>
      <div class="ou-demo">
        <div class="ou-video"><video controls playsinline preload="metadata" poster="media/ours-demo-poster.jpg" aria-label="Ours demo video"><source src="media/ours-demo.mp4" type="video/mp4"></video></div>
        <div class="ou-demo-side"><h3>Demo</h3><p>A short walkthrough of the Ours prototype.</p><p class="ou-links"><a class="pill" href="${PROTO_URL}" target="_blank" rel="noopener">try the prototype ${ARROW(16)}</a></p></div>
      </div>`;
    var s0 = sec('Project background', prose(
      P('For my product discovery course, three teammates and I explored the home productivity space. We chose to focus on young adults ages 18–24 because many people in this age group are taking on more household responsibilities while also balancing school, work, and other commitments. Additionally, living with roommates involves coordinating these responsibilities with people who may have different schedules and expectations.')+
      P('Our product goal was to reduce the time, effort, and stress involved in managing household responsibilities. Our business goal was for households to find enough value in Ours to use it as part of their weekly routine.'))+
      fig('ours-homeprod-scan.webp','Our early scan of the home productivity space','FigJam board titled Area of interest: Home Productivity, with sticky notes grouped under social and cultural trends, emerging technologies, market competitors, and approximate market sizing','ou-narrow'));
    var s1 = sec('What we learned from interviews', prose(
      P('To better understand how people currently manage their household responsibilities, our team conducted four interviews with college students. Three participants lived with roommates, and one lived alone. I helped write questions about how participants kept track of chores, what made them difficult to manage, and how they coordinated responsibilities with other people.')+
      P('One of the biggest takeaways from these interviews was that participants already had ways to divide chores, but remembering and following through could still be difficult. Specifically, participants described using their memory, group chats, and chore calendars, but tasks could still get postponed when they became busy.')+
      P('Another takeaway was that roommates could have different expectations about cleanliness and feel uncomfortable bringing up unfinished chores. One participant described waiting two days for a roommate to notice a chore because they did not want to remind them directly. This helped us understand why having a chore assigned to someone did not always mean it would get done.')+
      P('Additionally, participants described having to move chores around when their schedules changed. This helped us identify an opportunity for a shared household app that could accommodate these changes while making responsibilities easier to keep track of.'))+
      '<ol class="ou-steps" aria-label="From one interview observation to an opportunity"><li><span>observation</span><p>One participant used a chore calendar and a group chat but still waited two days for a roommate to notice an unfinished chore, because they didn’t want to remind them directly.</p></li><li><span>insight</span><p>Having a chore assigned to someone didn’t always mean it would get done. Remembering and bringing it up were still hard.</p></li><li><span>opportunity</span><p>A shared household app that helps roommates remember tasks, communicate changes, and see what others have completed.</p></li></ol>');
    var s2 = sec('Deciding what to include', prose(
      P('We considered a few different concepts, including a smart-home assistant, a paper household tracker, and a shared app. We chose to move forward with the app because it could give roommates one place to see their responsibilities and coordinate changes.')+
      P('The interviews helped us decide which features to include. For example, since participants described having different standards for cleanliness, we included a way to agree on what completing a chore means. Additionally, because participants often moved tasks around when they became busy, we included flexible completion windows and options to reschedule or swap chores.')+
      P('I created the customer journey map and service blueprint to better understand how these features would work together. Specifically, I mapped the experience of creating a household, inviting roommates, setting up responsibilities, and managing changes. This helped me think through both what the user would do and what the app would need to do to support them. For example, when someone requests a swap, the app would need to notify the other roommate and update the assignment after they accept.'))+
      '<div class="ou-stack">'+fig('ours-journey-map.webp','Customer journey map','Customer journey map for Maya, a college student living with three roommates, across six stages from recognizing the need to completing and reviewing chores, with an emotion curve that dips at the stress of adjusting plans')+fig('ours-service-blueprint.webp','Service blueprint','Service blueprint showing what roommates, the Ours app, and the backend system do at each of the six stages, separated by lines of visibility and internal interaction')+'</div>');
    var s3 = sec('The Ours concept', prose(
      P('In Ours, roommates create a shared household where they can add recurring chores, assign or rotate responsibilities, and agree on what needs to be completed. Each chore has a completion window, and the person responsible receives reminders. If something comes up, they can reschedule or request a swap.')+
      P('Additionally, roommates can see shared completion statuses so they know what has been done. We wanted these features to help households stay organized without one roommate having to continually remind everyone else.'))+
      '<div class="ou-trio">'+fig('ours-screen-add.webp','Adding a chore','Ours prototype screen for adding a chore, with a name, assignee, repeat setting, flexible completion window, and a description of what counts as done')+fig('ours-screen-detail.webp','Chore details','Ours prototype screen showing chore details: wipe down bathroom, due today, completion window of 6 to 9 PM, repeats weekly, and what counts as done')+fig('ours-screen-swap.webp','Swap request and shared board','Ours prototype screen showing a private swap request from Jordan with decline and accept buttons, above a shared board of what needs doing')+'</div>');
    var s4 = sec('Testing whether roommates would sign up', prose(
      P('One of the most important assumptions we tested was whether invited roommates would join Ours. Since the app involves sharing responsibilities, it would be difficult for it to be useful if only the person who created the household participated.')+
      P('We ran a 48-hour sign-up test with five households. One person in each household signed up first and invited their roommates. Our success criteria were for at least four of the five households to have two people sign up and for at least 70% of invited roommates to complete the sign-up.')+
      P('<b>Four of the five</b> households had at least two sign-ups. However, only <b>six of the 12</b> invited roommates signed up, which was <b>50%</b>. Since both criteria needed to be met, our assumption was not supported.'))+
      fig('ours-test1-results.webp','Test 1 results: sign-ups by household','Table of sign-ups for five households. In total, 11 of 17 members signed up, and 6 of 12 invited roommates signed up, which is 50 percent','ou-narrow')+
      prose(P('One limitation was that we only collected responses from people who signed up. This meant that we could not tell why the other roommates did not participate. Based on this result, I would want to ask those roommates whether they saw the invitation and what stopped them from joining before deciding how to change it.')));
    var s5 = sec('Testing how reminders felt', prose(
      P('Another assumption we tested was whether a reminder from Ours would feel more neutral than a reminder from a roommate. Our interviews showed that participants could feel uncomfortable reminding friends, so we wanted to understand whether the app could help with this.')+
      P('Our team manually sent 32 reminder texts across three households over one weekend. <b>Five of the eight</b> participants who could compare the texts with a roommate’s reminder rated them as more neutral. This was below our 70% target, so the result was inconclusive.')+
      P('Additionally, although <b>eight of the nine</b> chores were completed, we could not determine whether Ours reduced direct reminders over time. The test only lasted two days, and some participants mentioned that knowing our team was sending the texts influenced how they felt about them. If we tested this again, I would want to run it for longer and include households outside our personal networks.')));
    var s6 = sec('Testing shared completion statuses', prose(
      P('We also tested whether roommates would feel comfortable with others seeing which chores they had completed. We showed 11 participants a dashboard mockup and asked them to rate their comfort. One response came in after our assignment was due, so it is included here. <b>Seven</b> participants rated it a <b>four or five out of five</b>, which was still below our target of eight.')+
      P('One of the biggest takeaways was that accountability and feeling monitored could happen at the same time. <b>Six</b> participants selected both when asked how the feature would make them feel. Additionally, the written responses helped us understand situations we had not fully considered. For example, someone could finish a chore but forget to update it, making their roommates think they had not contributed.'))+
      '<div class="ou-test3">'+fig('ours-dashboard.webp','Dashboard mockup shown to participants','Dashboard mockup titled This Week, showing 3 of 5 chores completed at 60 percent, and a list of shared responsibilities marked completed, overdue, or upcoming')+'<div class="ou-charts">'+fig('ours-survey-comfort.webp','Survey: comfort with roommates seeing completion status','Bar chart of 11 responses to how comfortable people would feel knowing roommates could see which chores they have and have not completed')+fig('ours-survey-feel.webp','Survey: accountable, monitored, or both','Pie chart of 11 responses to whether the feature would make people feel more accountable, more monitored, or both')+'</div></div>'+
      prose(
      P('Based on these responses, I would want to make it easier to update a chore and provide context when someone is unavailable or needs to reschedule. However, we would need to test these changes to understand whether they actually address the concerns participants shared.')+
      P('I would also change how we asked for feedback. Specifically, asking whether people felt accountable or monitored may have influenced their answers. I would first ask participants to explain how they would interpret the dashboard in different situations before asking more specific questions.')));
    var s7 = sec('Reflection and next steps', prose(
      P('One of the biggest things I learned from this project was how many parts of a shared app depend on other people’s participation. Someone could be interested in using Ours themselves, but their experience would still depend on whether their roommates joined and kept using it. Additionally, a feature we included to help with accountability could also create misunderstandings between roommates.')+
      P('We decided to continue with Ours while reconsidering the invitation process and how responsibilities are shown. Although there were some encouraging responses, none of our three assumptions met their full success criteria. We also have not yet determined whether Ours reduces the effort and stress of managing chores or whether households would use it every week.')+
      P('If I continued this project, I would first follow up with the roommates who did not sign up and test changes to the invitation and dashboard. After that, I would run a multiweek pilot to understand how the app fits into people’s routines. Specifically, I would want to see whether roommates remind each other less, whether they continue using Ours, and whether the person who created the household still feels responsible for making sure everyone follows through.')));
    var end = '<div class="cp-end"><a href="#" class="back" style="margin:0">'+BACK+' back to projects</a><a class="pill" href="#about">more about me '+ARROW(16)+'</a></div>';
    return '<article class="inner-page case-study ou-case" style="max-width:none;min-height:0">'+hero+s0+s1+s2+s3+s4+s5+s6+s7+end+'</article>';
  }

  // Click-to-enlarge for case-study images (keyboard accessible, Escape closes, focus returns)
  (function(){
    var box=null,opener=null;
    function close(){ if(!box) return; box.remove(); box=null; document.removeEventListener('keydown',key); if(opener){ opener.focus(); opener=null; } }
    function key(e){
      if(e.key==='Escape'){ e.preventDefault(); close(); }
      else if(e.key==='Tab' && box){ e.preventDefault(); box.querySelector('.ou-close').focus(); }
    }
    document.addEventListener('click',function(e){
      var z=e.target.closest&&e.target.closest('.ou-zoom'); if(!z) return;
      opener=z; box=document.createElement('div'); box.className='ou-lightbox'; box.setAttribute('role','dialog'); box.setAttribute('aria-modal','true'); box.setAttribute('aria-label',z.getAttribute('aria-label')||'Enlarged image');
      var inner=z.querySelector('img')?z.querySelector('img').cloneNode(true):z.firstElementChild.cloneNode(true);
      var wrap=document.createElement('div'); wrap.className='ou-lb-inner'; wrap.appendChild(inner);
      var b=document.createElement('button'); b.type='button'; b.className='ou-close'; b.textContent='close ✕'; b.addEventListener('click',close);
      box.appendChild(b); box.appendChild(wrap); box.addEventListener('click',function(ev){ if(ev.target===box) close(); });
      document.body.appendChild(box); b.focus(); document.addEventListener('keydown',key);
    });
  })();

  function notFound(){
    return '<section class="inner-page"><h1>page not found</h1><a class="pill" href="#">back home '+ARROW(16)+'</a></section>';
  }

  var view = document.getElementById('view');
  var first = true;
  function render(){
    var path = route(), html, section = 'work';
    var proj = projects.filter(function(p){return path==='work-'+p.slug;})[0];
    if(path===''||path==='work'){ html = home(); }
    else if(path==='about'){ html = about(); section='about'; }
    else if(path==='extras'){ html = extras(); section='extras'; }
    else if(proj){ html = caseStudy(proj); section=''; }
    else { html = notFound(); section=''; }
    view.innerHTML = html;
    (function(){
      var h=view.querySelector('.case-study h1'); if(!h) return;
      var f=h.querySelector('.hero-flower');
      if(!f){ f=document.createElement('span'); f.className='hero-flower'; h.appendChild(f); }
      f.textContent='\u2733'; f.setAttribute('aria-hidden','true');
      var tn=h.firstChild;
      if(tn&&tn.nodeType===3){
        var t=tn.nodeValue, i=t.lastIndexOf(' ');
        tn.nodeValue=t.slice(0,i+1);
        var nw=document.createElement('span'); nw.className='nw';
        nw.appendChild(document.createTextNode(t.slice(i+1))); nw.appendChild(f); h.appendChild(nw);
      }
    })();
    document.body.classList.toggle('hm', !!proj && proj.slug==='handyman-calculator');
    document.getElementById('nav-work').className = (path===''||path==='work') ? 'active' : '';
    document.getElementById('nav-extras').className = section==='extras' ? 'active' : '';
    document.getElementById('nav-about').className = section==='about' ? 'active' : '';
    if(!first){ window.scrollTo(0,0); }
    first = false;
  }
  view.addEventListener('click', function(e){
    var tab = e.target.closest ? e.target.closest('[data-tab]') : null;
    if(tab){
      var idx = tab.getAttribute('data-tab');
      view.querySelectorAll('[data-tab]').forEach(function(b){ b.setAttribute('aria-pressed', b===tab ? 'true' : 'false'); });
      view.querySelectorAll('[data-board]').forEach(function(f){ f.hidden = f.getAttribute('data-board') !== idx; });
      return;
    }
    var a = e.target.closest ? e.target.closest('[data-jump]') : null;
    if(!a) return;
    e.preventDefault();
    var t = document.getElementById(a.getAttribute('data-jump'));
    if(t){ t.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
  window.addEventListener('hashchange', render);
  render();
})();
