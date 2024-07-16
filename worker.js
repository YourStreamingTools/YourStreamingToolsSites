addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const hostname = url.hostname
  const pathname = url.pathname

  // Log debug information
  console.log(`Hostname: ${hostname}`)
  console.log(`Pathname: ${pathname}`)

  if (pathname === '/') {
    switch (hostname) {
      case 'gfaundead.sites.yourstreamingtools.com':
        return new Response(getGFAUnDeadHtml(), {
          headers: { 'content-type': 'text/html' }
        })
      case 'auntykai.sites.yourstreamingtools.com':
        return new Response(getAKAuntyKaiHtml(), {
          headers: { 'content-type': 'text/html' }
        })
      case 'gamingforaustralia.sites.yourstreamingtools.com':
        return new Response(getGamingForAustraliaHtml(), {
          headers: { 'content-type': 'text/html' }
        })
      default:
        return new Response(getDefaultWelcomeHtml(), {
          headers: { 'content-type': 'text/html' }
        })
    }
  } else {
    return new Response('Not Found', { status: 404 })
  }
}

function getDefaultWelcomeHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Welcome to YourStreamingTools</title>
  <meta name="description" content="Welcome to the social links page for members of the YourStreamingTools Team.">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/1.0.0/css/bulma.min.css">
  <link rel="icon" type="image/png" href="https://cdn.yourstreamingtools.com/img/logo.ico">
  <style>
    body { background-color: #14161A; color: #ffffff; }
    .hero { background-color: #14161A; }
  </style>
</head>
<body>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title has-text-white">
          Welcome to YourStreamingTools
        </h1>
        <h2 class="subtitle has-text-white">
          This page is for social links from members of the YourStreamingTools Team.
        </h2>
        <p>&copy; ${new Date().getFullYear()} YourStreamingTools<br>
      </div>
    </div>
  </section>
</body>
</html>`
}

function getGFAUnDeadHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>GFAUnDead Links</title>
  <meta name="description" content="Find us online!">
  <meta name="author" content="Seth Cottle">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.yourstreamingtools.com/sites/css/normalize.css">
  <link rel="stylesheet" href="https://cdn.yourstreamingtools.com/sites/css/skeleton-dark.css">
  <link rel="stylesheet" href="https://cdn.yourstreamingtools.com/sites/css/brands.css">
  <link rel="icon" type="image/png" href="https://cdn.yourstreamingtools.com/img/logo.ico">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="column" style="margin-top: 10%">
        <img src="https://cdn.yourstreamingtools.com/img/logo.ico" srcset="https://cdn.yourstreamingtools.com/img/logo.ico 2x" alt="GFA Logo">
        <h1>GFAUnDead</h1>
        <p></p>
        <a class="button button-github" href="https://github.com/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/github.svg" alt="GitHub Logo">GitHub</a><br>
        <a class="button button-twit" href="https://twitter.com/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/twitter.svg" alt="Twitter Logo">Twitter</a><br>
        <a class="button button-instagram" href="https://www.instagram.com/GFAUnDead/" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/instagram.svg" alt="Instagram Logo">Instagram</a><br>
        <a class="button button-faceb" href="https://www.facebook.com/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/facebook.svg" alt="Facebook Logo">Facebook</a><br>
        <a class="button button-yt" href="https://www.youtube.com/channel/UCVFA_AvilED8K5lm43GSiaQ" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/youtube.svg" alt="YouTube Logo">YouTube</a><br>
        <a class="button button-discord" href="https://discord.com/invite/B2GqChHK8k" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/discord.svg" alt="Discord Logo">Discord</a><br>
        <a class="button button-twitch" href="https://www.twitch.tv/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/twitch.svg" alt="Twitch Logo">Twitch</a><br>
        <a class="button button-spotify" href="https://open.spotify.com/user/undeadlokko?si=88be351f21fd4785" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/spotify.svg" alt="Spotify Logo">Spotify</a><br>
        <a class="button button-reddit" href="https://www.reddit.com/user/gfaundead" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/reddit.svg" alt="Reddit Logo">Reddit</a><br>
        <a class="button button-tiktok" href="https://www.tiktok.com/@GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/tiktok.svg" alt="TikTok Logo">TikTok</a><br>
        <a class="button button-default" href="mailto:contact@gfaundead.stream" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/email.svg" alt="Email Icon">Email Contact</a><br>
        <a class="button button-soundcloud" href="https://soundcloud.com/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/soundcloud.svg" alt="SoundCloud Logo">SoundCloud</a><br>
        <a class="button button-steam" href="https://steamcommunity.com/groups/GamingForAustralia" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/steam.svg" alt="Steam Logo">Steam</a><br>
        <a class="button button-paypal" href="https://paypal.me/gfaundead" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/paypal.svg" alt="PayPal Logo">PayPal</a><br>
        <a class="button button-patreon" href="https://www.patreon.com/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/patreon.svg" alt="Patreon Logo">Patreon</a><br>
        <br><br>
        <p>&copy; 2016-${new Date().getFullYear()}, GFAUnDead<br>
          GFAUnDead is a subsidiary and is registered under LochsMedia, fully registered in Australia under Business Number: 20447022747
        </p>
      </div>
    </div>
  </div>
</body>
</html>`
}

function getAKAuntyKaiHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AKAuntyKai Links</title>
  <meta name="description" content="Find me online!">
  <meta name="author" content="AKAuntyKai">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.yourstreamingtools.com/sites/css/normalize.css">
  <link rel="stylesheet" href="https://cdn.yourstreamingtools.com/sites/css/skeleton-dark.css">
  <link rel="stylesheet" href="https://cdn.yourstreamingtools.com/sites/css/brands.css">
  <link rel="icon" type="image/png" href="https://cdn.yourstreamingtools.com/img/logo.ico">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="column" style="margin-top: 10%">
        <img src="https://cdn.yourstreamingtools.com/img/logo.ico" srcset="https://cdn.yourstreamingtools.com/img/logo.ico 4x" alt="GFA Logo">
        <h1>AKAuntyKai</h1>
        <p></p>
        <a class="button button-yt" href="https://www.youtube.com/@AKauntykai" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/youtube.svg" alt="YouTube Logo">YouTube</a><br>
        <a class="button button-discord" href="https://discord.gg/XRCWJBvtMm" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/discord.svg" alt="Discord Logo">Discord</a><br>
        <a class="button button-twitch" href="https://www.twitch.tv/AKAuntyKai" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/twitch.svg" alt="Twitch Logo">Twitch</a><br>
        <a class="button button-tiktok" href="https://www.tiktok.com/@auntykaiak" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/tiktok.svg" alt="TikTok Logo">TikTok</a><br>
        <br><br>
        <p>&copy; ${new Date().getFullYear()}, AuntyKai</p>
      </div>
    </div>
  </div>
</body>
</html>`
}

function getGamingForAustraliaHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>GFALinks</title>
  <meta name="description" content="Find us online!">
  <meta name="author" content="Seth Cottle">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.yourstreamingtools.com/sites/css/normalize.css">
  <link rel="stylesheet" href="https://cdn.yourstreamingtools.com/sites/css/skeleton-dark.css">
  <link rel="stylesheet" href="https://cdn.yourstreamingtools.com/sites/css/brands.css">
  <link rel="icon" type="image/png" href="https://cdn.yourstreamingtools.com/sites/images/gfa-avatar.png">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="column" style="margin-top: 10%">
        <img src="https://cdn.yourstreamingtools.com/sites/images/gfa-logo.png" srcset="https://cdn.yourstreamingtools.com/sites/images/gfa-logo.png 2x" alt="GFA Logo">
        <h1>GamingForAustralia</h1>
        <p></p>
        <a class="button button-twit" href="https://twitter.com/gaming4aus" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/twitter.svg" alt="Twitter Logo">Twitter</a><br>
        <a class="button button-instagram" href="https://www.instagram.com/gamingforaustralia/" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/instagram.svg" alt="Instagram Logo">Instagram</a><br>
        <a class="button button-faceb" href="https://www.facebook.com/gamingforaustralia" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/facebook.svg" alt="Facebook Logo">Find us on Facebook</a><br>
        <a class="button button-yt" href="https://www.youtube.com/c/GamingForAustraliaChannel" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/youtube.svg" alt="YouTube Logo">YouTube</a><br>
        <a class="button button-discord" href="https://discord.com/invite/YVHnzCs" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/discord.svg" alt="Discord Logo">Discord</a><br>
        <a class="button button-twitch" href="https://www.twitch.tv/gamingforaustralia" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/twitch.svg" alt="Twitch Logo">Twitch</a><br>
        <a class="button button-default" href="mailto:admin@gamingforaustralia.com.au" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/email.svg" alt="Email Icon">admin</a><br>
        <a class="button button-default" href="mailto:jobs@gamingforaustralia.com.au" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/email_alt.svg" alt="Email Icon">jobs</a><br>
        <a class="button button-soundcloud" href="https://soundcloud.com/gamingforaustralia" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/soundcloud.svg" alt="SoundCloud Logo">SoundCloud</a><br>
        <a class="button button-tumb" href="https://gamingforaustralia.tumblr.com/" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/tumblr.svg" alt="Tumblr Logo">Tumblr</a><br>
        <a class="button button-steam" href="https://steamcommunity.com/groups/GamingForAustralia" target="_blank" rel="noopener"><img class="icon" src="https://cdn.yourstreamingtools.com/sites/icons/steam.svg" alt="Steam Logo">Steam</a><br>
        <br><br>
        <p>&copy; ${new Date().getFullYear()} GamingForAustralia</p>
      </div>
    </div>
  </div>
</body>
</html>`
}