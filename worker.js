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
  const baseUrl = 'https://cdn.yourstreamingtools.com'
  const logoUrl = `${baseUrl}/sites/images/gfaUnDead.png?width=128&quality=80`
  const githubIcon = `${baseUrl}/sites/icons/github.svg?width=24&quality=80`
  const twitterIcon = `${baseUrl}/sites/icons/twitter.svg?width=24&quality=80`
  const instagramIcon = `${baseUrl}/sites/icons/instagram.svg?width=24&quality=80`
  const facebookIcon = `${baseUrl}/sites/icons/facebook.svg?width=24&quality=80`
  const youtubeIcon = `${baseUrl}/sites/icons/youtube.svg?width=24&quality=80`
  const discordIcon = `${baseUrl}/sites/icons/discord.svg?width=24&quality=80`
  const twitchIcon = `${baseUrl}/sites/icons/twitch.svg?width=24&quality=80`
  const spotifyIcon = `${baseUrl}/sites/icons/spotify.svg?width=24&quality=80`
  const redditIcon = `${baseUrl}/sites/icons/reddit.svg?width=24&quality=80`
  const tiktokIcon = `${baseUrl}/sites/icons/tiktok.svg?width=24&quality=80`
  const emailIcon = `${baseUrl}/sites/icons/email.svg?width=24&quality=80`
  const soundcloudIcon = `${baseUrl}/sites/icons/soundcloud.svg?width=24&quality=80`
  const steamIcon = `${baseUrl}/sites/icons/steam.svg?width=24&quality=80`
  const paypalIcon = `${baseUrl}/sites/icons/paypal.svg?width=24&quality=80`
  const patreonIcon = `${baseUrl}/sites/icons/patreon.svg?width=24&quality=80`

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>GFAUnDead Links</title>
  <meta name="description" content="Find us online!">
  <meta name="author" content="Seth Cottle">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${baseUrl}/sites/css/normalize.css">
  <link rel="stylesheet" href="${baseUrl}/sites/css/skeleton-dark.css">
  <link rel="stylesheet" href="${baseUrl}/sites/css/brands.css">
  <link rel="icon" type="image/png" href="${logoUrl}">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="column" style="margin-top: 10%">
        <img src="${logoUrl}" srcset="${logoUrl} 2x" alt="gfaUnDead Logo">
        <h1>GFAUnDead</h1>
        <p></p>
        <a class="button button-github" href="https://github.com/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="${githubIcon}" alt="GitHub Logo">GitHub</a><br>
        <a class="button button-twit" href="https://twitter.com/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="${twitterIcon}" alt="Twitter Logo">Twitter</a><br>
        <a class="button button-instagram" href="https://www.instagram.com/GFAUnDead/" target="_blank" rel="noopener"><img class="icon" src="${instagramIcon}" alt="Instagram Logo">Instagram</a><br>
        <a class="button button-faceb" href="https://www.facebook.com/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="${facebookIcon}" alt="Facebook Logo">Facebook</a><br>
        <a class="button button-yt" href="https://www.youtube.com/channel/UCVFA_AvilED8K5lm43GSiaQ" target="_blank" rel="noopener"><img class="icon" src="${youtubeIcon}" alt="YouTube Logo">YouTube</a><br>
        <a class="button button-discord" href="https://discord.com/invite/B2GqChHK8k" target="_blank" rel="noopener"><img class="icon" src="${discordIcon}" alt="Discord Logo">Discord</a><br>
        <a class="button button-twitch" href="https://www.twitch.tv/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="${twitchIcon}" alt="Twitch Logo">Twitch</a><br>
        <a class="button button-spotify" href="https://open.spotify.com/user/undeadlokko?si=88be351f21fd4785" target="_blank" rel="noopener"><img class="icon" src="${spotifyIcon}" alt="Spotify Logo">Spotify</a><br>
        <a class="button button-reddit" href="https://www.reddit.com/user/gfaundead" target="_blank" rel="noopener"><img class="icon" src="${redditIcon}" alt="Reddit Logo">Reddit</a><br>
        <a class="button button-tiktok" href="https://www.tiktok.com/@GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="${tiktokIcon}" alt="TikTok Logo">TikTok</a><br>
        <a class="button button-default" href="mailto:contact@gfaundead.stream" target="_blank" rel="noopener"><img class="icon" src="${emailIcon}" alt="Email Icon">Email Contact</a><br>
        <a class="button button-soundcloud" href="https://soundcloud.com/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="${soundcloudIcon}" alt="SoundCloud Logo">SoundCloud</a><br>
        <a class="button button-steam" href="https://steamcommunity.com/groups/GamingForAustralia" target="_blank" rel="noopener"><img class="icon" src="${steamIcon}" alt="Steam Logo">Steam</a><br>
        <a class="button button-paypal" href="https://paypal.me/gfaundead" target="_blank" rel="noopener"><img class="icon" src="${paypalIcon}" alt="PayPal Logo">PayPal</a><br>
        <a class="button button-patreon" href="https://www.patreon.com/GFAUnDead" target="_blank" rel="noopener"><img class="icon" src="${patreonIcon}" alt="Patreon Logo">Patreon</a><br>
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
  const baseUrl = 'https://cdn.yourstreamingtools.com'
  const logoUrl = `${baseUrl}/img/logo.ico?width=128&quality=80`
  const youtubeIcon = `${baseUrl}/sites/icons/youtube.svg?width=24&quality=80`
  const discordIcon = `${baseUrl}/sites/icons/discord.svg?width=24&quality=80`
  const twitchIcon = `${baseUrl}/sites/icons/twitch.svg?width=24&quality=80`
  const tiktokIcon = `${baseUrl}/sites/icons/tiktok.svg?width=24&quality=80`

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AKAuntyKai Links</title>
  <meta name="description" content="Find me online!">
  <meta name="author" content="AKAuntyKai">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${baseUrl}/sites/css/normalize.css">
  <link rel="stylesheet" href="${baseUrl}/sites/css/skeleton-dark.css">
  <link rel="stylesheet" href="${baseUrl}/sites/css/brands.css">
  <link rel="icon" type="image/png" href="${logoUrl}">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="column" style="margin-top: 10%">
        <img src="${logoUrl}" srcset="${logoUrl} 4x" alt="GFA Logo">
        <h1>AKAuntyKai</h1>
        <p></p>
        <a class="button button-yt" href="https://www.youtube.com/@AKauntykai" target="_blank" rel="noopener"><img class="icon" src="${youtubeIcon}" alt="YouTube Logo">YouTube</a><br>
        <a class="button button-discord" href="https://discord.gg/XRCWJBvtMm" target="_blank" rel="noopener"><img class="icon" src="${discordIcon}" alt="Discord Logo">Discord</a><br>
        <a class="button button-twitch" href="https://www.twitch.tv/AKAuntyKai" target="_blank" rel="noopener"><img class="icon" src="${twitchIcon}" alt="Twitch Logo">Twitch</a><br>
        <a class="button button-tiktok" href="https://www.tiktok.com/@auntykaiak" target="_blank" rel="noopener"><img class="icon" src="${tiktokIcon}" alt="TikTok Logo">TikTok</a><br>
        <br><br>
        <p>&copy; ${new Date().getFullYear()}, AuntyKai</p>
      </div>
    </div>
  </div>
</body>
</html>`
}

function getGamingForAustraliaHtml() {
  const baseUrl = 'https://cdn.yourstreamingtools.com'
  const logoUrl = `${baseUrl}/sites/images/gfa-avatar.png?width=128&quality=80`
  const logo2xUrl = `${baseUrl}/sites/images/gfa-logo.png?width=256&quality=80`
  const twitterIcon = `${baseUrl}/sites/icons/twitter.svg?width=24&quality=80`
  const instagramIcon = `${baseUrl}/sites/icons/instagram.svg?width=24&quality=80`
  const facebookIcon = `${baseUrl}/sites/icons/facebook.svg?width=24&quality=80`
  const youtubeIcon = `${baseUrl}/sites/icons/youtube.svg?width=24&quality=80`
  const discordIcon = `${baseUrl}/sites/icons/discord.svg?width=24&quality=80`
  const twitchIcon = `${baseUrl}/sites/icons/twitch.svg?width=24&quality=80`
  const emailIcon = `${baseUrl}/sites/icons/email.svg?width=24&quality=80`
  const emailAltIcon = `${baseUrl}/sites/icons/email_alt.svg?width=24&quality=80`
  const soundcloudIcon = `${baseUrl}/sites/icons/soundcloud.svg?width=24&quality=80`
  const tumblrIcon = `${baseUrl}/sites/icons/tumblr.svg?width=24&quality=80`
  const steamIcon = `${baseUrl}/sites/icons/steam.svg?width=24&quality=80`

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>GFALinks</title>
  <meta name="description" content="Find us online!">
  <meta name="author" content="Seth Cottle">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${baseUrl}/sites/css/normalize.css">
  <link rel="stylesheet" href="${baseUrl}/sites/css/skeleton-dark.css">
  <link rel="stylesheet" href="${baseUrl}/sites/css/brands.css">
  <link rel="icon" type="image/png" href="${logoUrl}">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="column" style="margin-top: 10%">
        <img src="${logo2xUrl}" srcset="${logo2xUrl} 2x" alt="GFA Logo">
        <h1>GamingForAustralia</h1>
        <p></p>
        <a class="button button-twit" href="https://twitter.com/gaming4aus" target="_blank" rel="noopener"><img class="icon" src="${twitterIcon}" alt="Twitter Logo">Twitter</a><br>
        <a class="button button-instagram" href="https://www.instagram.com/gamingforaustralia/" target="_blank" rel="noopener"><img class="icon" src="${instagramIcon}" alt="Instagram Logo">Instagram</a><br>
        <a class="button button-faceb" href="https://www.facebook.com/gamingforaustralia" target="_blank" rel="noopener"><img class="icon" src="${facebookIcon}" alt="Facebook Logo">Find us on Facebook</a><br>
        <a class="button button-yt" href="https://www.youtube.com/c/GamingForAustraliaChannel" target="_blank" rel="noopener"><img class="icon" src="${youtubeIcon}" alt="YouTube Logo">YouTube</a><br>
        <a class="button button-discord" href="https://discord.com/invite/YVHnzCs" target="_blank" rel="noopener"><img class="icon" src="${discordIcon}" alt="Discord Logo">Discord</a><br>
        <a class="button button-twitch" href="https://www.twitch.tv/gamingforaustralia" target="_blank" rel="noopener"><img class="icon" src="${twitchIcon}" alt="Twitch Logo">Twitch</a><br>
        <a class="button button-default" href="mailto:admin@gamingforaustralia.com.au" target="_blank" rel="noopener"><img class="icon" src="${emailIcon}" alt="Email Icon">admin</a><br>
        <a class="button button-default" href="mailto:jobs@gamingforaustralia.com.au" target="_blank" rel="noopener"><img class="icon" src="${emailAltIcon}" alt="Email Icon">jobs</a><br>
        <a class="button button-soundcloud" href="https://soundcloud.com/gamingforaustralia" target="_blank" rel="noopener"><img class="icon" src="${soundcloudIcon}" alt="SoundCloud Logo">SoundCloud</a><br>
        <a class="button button-tumb" href="https://gamingforaustralia.tumblr.com/" target="_blank" rel="noopener"><img class="icon" src="${tumblrIcon}" alt="Tumblr Logo">Tumblr</a><br>
        <a class="button button-steam" href="https://steamcommunity.com/groups/GamingForAustralia" target="_blank" rel="noopener"><img class="icon" src="${steamIcon}" alt="Steam Logo">Steam</a><br>
        <br><br>
        <p>&copy; ${new Date().getFullYear()} GamingForAustralia</p>
      </div>
    </div>
  </div>
</body>
</html>`
}