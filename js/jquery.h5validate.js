



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>h5Validate/jquery.h5validate.js at master · ericelliott/h5Validate</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="ericelliott/h5Validate" name="twitter:title" /><meta content="h5Validate - An HTML5 form validation plugin for jQuery. Works on all major browsers, both new and old. Implements inline, realtime validation best practices (based on surveys and usability studies). " name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/364727?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/364727?v=3&amp;s=400" property="og:image" /><meta content="ericelliott/h5Validate" property="og:title" /><meta content="https://github.com/ericelliott/h5Validate" property="og:url" /><meta content="h5Validate - An HTML5 form validation plugin for jQuery. Works on all major browsers, both new and old. Implements inline, realtime validation best practices (based on surveys and usability studies). Developed for production use in e-commerce. Currently in production with millions of users." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="58832919:3910:2D51CD:5496BD1A" name="octolytics-dimension-request_id" /><meta content="1902186" name="octolytics-actor-id" /><meta content="raxion" name="octolytics-actor-login" /><meta content="957c88de3af9369a9113c6aa8649af01d9ab9f37d27b7316a6174b1b06077ddb" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="+1D570aypmPbT/hoZSLWvQi1WjlUJzSFyoQhpx8p1jyHUJQJCFvyEBiV4lA0i9TreBfp0Un4rWIes+VwKDeWLw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-9bcf5def7eb44e2a101b20aaecf3707f4b0a10ab8f4d6eebec29371f821c4b29.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-47bc67324d463c7cecb5ee4c009628c91db85b0e9288a9e663f2d06ff9e03088.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="cffc32e08a29062b908cc3ddb47285af">

      
  <meta name="description" content="h5Validate - An HTML5 form validation plugin for jQuery. Works on all major browsers, both new and old. Implements inline, realtime validation best practices (based on surveys and usability studies). Developed for production use in e-commerce. Currently in production with millions of users.">
  <meta name="go-import" content="github.com/ericelliott/h5Validate git https://github.com/ericelliott/h5Validate.git">

  <meta content="364727" name="octolytics-dimension-user_id" /><meta content="ericelliott" name="octolytics-dimension-user_login" /><meta content="956322" name="octolytics-dimension-repository_id" /><meta content="ericelliott/h5Validate" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="956322" name="octolytics-dimension-repository_network_root_id" /><meta content="ericelliott/h5Validate" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/ericelliott/h5Validate/commits/master.atom" rel="alternate" title="Recent Commits to h5Validate:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/ericelliott/h5Validate/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/ericelliott/h5Validate/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/raxion" data-ga-click="Header, go to profile, text:username">
      <img alt="raxion" class="avatar" data-user="1902186" height="20" src="https://avatars3.githubusercontent.com/u/1902186?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">raxion</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="ericelliott/h5Validate">This repository</span>
    </li>
      <li>
        <a href="/ericelliott/h5Validate/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="07MyE51OIOLAzcU+FbFZVjAmxMjP39aszuqNkUO7eKzlRDN/WP9ZtF2+sv/I1L1tMghK+6HY6PV5Gi4rzFUGPQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="CqRIGU+OWow2Ei4xXQ0sB2GLs/Mwc9hXgfqdbQ7fGEAsyrOtptUJJPUg1tzN7A128hzFW7EU/f8+R3RG3gYAlQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="956322" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/ericelliott/h5Validate/watchers">
        28
      </a>
      <a href="/ericelliott/h5Validate/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/ericelliott/h5Validate/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="iwN86DpjR3NW9d8XG/VK5ZQlSlMFifs1Y9lW+JOxVjysDxWGyobMPlJhCxDGu5nrZALOzvko1QfktwbicI8GyQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar ericelliott/h5Validate">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/ericelliott/h5Validate/stargazers">
          475
        </a>
</form>
    <form accept-charset="UTF-8" action="/ericelliott/h5Validate/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Clv9kvc7QtttB/UxEHIkHOqHoY1vI2YK0u0zycZp0Qa1dknTUyixCQI+e1IBjU7NzE8qd7zbA0sdLdmoayIwNg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star ericelliott/h5Validate">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/ericelliott/h5Validate/stargazers">
          475
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/ericelliott/h5Validate/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of ericelliott/h5Validate to your account" aria-label="Fork your own copy of ericelliott/h5Validate to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/ericelliott/h5Validate/network" class="social-count">118</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/ericelliott" class="url fn" itemprop="url" rel="author"><span itemprop="title">ericelliott</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/ericelliott/h5Validate" class="js-current-repository" data-pjax="#js-repo-pjax-container">h5Validate</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/ericelliott/h5Validate/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/ericelliott/h5Validate" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /ericelliott/h5Validate">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/ericelliott/h5Validate/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /ericelliott/h5Validate/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/ericelliott/h5Validate/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /ericelliott/h5Validate/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/ericelliott/h5Validate/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /ericelliott/h5Validate/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/ericelliott/h5Validate/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /ericelliott/h5Validate/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/ericelliott/h5Validate/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /ericelliott/h5Validate/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/ericelliott/h5Validate.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:ericelliott/h5Validate.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/ericelliott/h5Validate" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/ericelliott/h5Validate" class="minibutton sidebar-button" title="Save ericelliott/h5Validate to your computer and use it in GitHub Desktop." aria-label="Save ericelliott/h5Validate to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/ericelliott/h5Validate/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of ericelliott/h5Validate as a zip file"
                   title="Download the contents of ericelliott/h5Validate as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/ericelliott/h5Validate/blob/b4bda73fb8ff49e53e40156a9efb1a220eba5657/jquery.h5validate.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:36759a301c999d0fb19fefb9049f5fc0 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/ericelliott/h5Validate/blob/develop/jquery.h5validate.js"
                 data-name="develop"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="develop">develop</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/ericelliott/h5Validate/blob/master/jquery.h5validate.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/ericelliott/h5Validate/tree/0.9.0/jquery.h5validate.js"
                 data-name="0.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.9.0">0.9.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/ericelliott/h5Validate/tree/0.8.4/jquery.h5validate.js"
                 data-name="0.8.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.8.4">0.8.4</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/ericelliott/h5Validate/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ericelliott/h5Validate" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">h5Validate</span></a></span></span><span class="separator">/</span><strong class="final-path">jquery.h5validate.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Jonathan Goode" class="avatar" data-user="1266205" height="24" src="https://avatars1.githubusercontent.com/u/1266205?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/u01jmg3" rel="contributor">u01jmg3</a></span>
        <time datetime="2013-08-30T10:58:18Z" is="relative-time">Aug 30, 2013</time>
        <div class="commit-title">
            <a href="/ericelliott/h5Validate/commit/b3f839bc9c41a164688fe296cd38d58bfa88e938" class="message" data-pjax="true" title="Removed {1} from telephone regex as this is already implied so therefore redundant code">Removed {1} from telephone regex as this is already implied so theref…</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>8</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="ericelliott" href="/ericelliott/h5Validate/commits/master/jquery.h5validate.js?author=ericelliott"><img alt="Eric Elliott" class="avatar" data-user="364727" height="20" src="https://avatars2.githubusercontent.com/u/364727?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="opendining" href="/ericelliott/h5Validate/commits/master/jquery.h5validate.js?author=opendining"><img alt="Tim Ridgely" class="avatar" data-user="645450" height="20" src="https://avatars3.githubusercontent.com/u/645450?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="u01jmg3" href="/ericelliott/h5Validate/commits/master/jquery.h5validate.js?author=u01jmg3"><img alt="Jonathan Goode" class="avatar" data-user="1266205" height="20" src="https://avatars3.githubusercontent.com/u/1266205?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="uglymunky" href="/ericelliott/h5Validate/commits/master/jquery.h5validate.js?author=uglymunky"><img alt="Gabriel" class="avatar" data-user="530233" height="20" src="https://avatars1.githubusercontent.com/u/530233?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="sjoerdmulder" href="/ericelliott/h5Validate/commits/master/jquery.h5validate.js?author=sjoerdmulder"><img alt="Sjoerd Mulder" class="avatar" data-user="235745" height="20" src="https://avatars0.githubusercontent.com/u/235745?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="paulcichonski" href="/ericelliott/h5Validate/commits/master/jquery.h5validate.js?author=paulcichonski"><img alt="Paul Cichonski" class="avatar" data-user="279886" height="20" src="https://avatars1.githubusercontent.com/u/279886?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="szepeviktor" href="/ericelliott/h5Validate/commits/master/jquery.h5validate.js?author=szepeviktor"><img alt="Viktor Szépe" class="avatar" data-user="952007" height="20" src="https://avatars0.githubusercontent.com/u/952007?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="joelpurra" href="/ericelliott/h5Validate/commits/master/jquery.h5validate.js?author=joelpurra"><img alt="Joel Purra" class="avatar" data-user="1398544" height="20" src="https://avatars2.githubusercontent.com/u/1398544?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Eric Elliott" data-user="364727" height="24" src="https://avatars0.githubusercontent.com/u/364727?v=3&amp;s=48" width="24" />
            <a href="/ericelliott">ericelliott</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tim Ridgely" data-user="645450" height="24" src="https://avatars1.githubusercontent.com/u/645450?v=3&amp;s=48" width="24" />
            <a href="/opendining">opendining</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jonathan Goode" data-user="1266205" height="24" src="https://avatars1.githubusercontent.com/u/1266205?v=3&amp;s=48" width="24" />
            <a href="/u01jmg3">u01jmg3</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Gabriel" data-user="530233" height="24" src="https://avatars3.githubusercontent.com/u/530233?v=3&amp;s=48" width="24" />
            <a href="/uglymunky">uglymunky</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sjoerd Mulder" data-user="235745" height="24" src="https://avatars2.githubusercontent.com/u/235745?v=3&amp;s=48" width="24" />
            <a href="/sjoerdmulder">sjoerdmulder</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Paul Cichonski" data-user="279886" height="24" src="https://avatars3.githubusercontent.com/u/279886?v=3&amp;s=48" width="24" />
            <a href="/paulcichonski">paulcichonski</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Viktor Szépe" data-user="952007" height="24" src="https://avatars2.githubusercontent.com/u/952007?v=3&amp;s=48" width="24" />
            <a href="/szepeviktor">szepeviktor</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Joel Purra" data-user="1398544" height="24" src="https://avatars0.githubusercontent.com/u/1398544?v=3&amp;s=48" width="24" />
            <a href="/joelpurra">joelpurra</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>554 lines (475 sloc)</span>
          <span class="meta-divider"></span>
        <span>20.253 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/ericelliott/h5Validate/raw/master/jquery.h5validate.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/ericelliott/h5Validate/blame/master/jquery.h5validate.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/ericelliott/h5Validate/commits/master/jquery.h5validate.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="github-windows://openRepo/https://github.com/ericelliott/h5Validate?branch=master&amp;filepath=jquery.h5validate.js" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/ericelliott/h5Validate/edit/master/jquery.h5validate.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/ericelliott/h5Validate/delete/master/jquery.h5validate.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> * h5Validate</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> * @version v0.9.0</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> * Using semantic versioning: http://semver.org/</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> * @author Eric Hamilton http://ericleads.com/</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"> * @copyright 2010 - 2012 Eric Hamilton</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c"> * Dual licensed under the MIT and GPL licenses:</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c"> * http://www.opensource.org/licenses/mit-license.php</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c"> * http://www.gnu.org/licenses/gpl.html</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-c"> * Developed under the sponsorship of RootMusic, Zumba Fitness, LLC, and Rese Property Management</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="pl-c">/*global jQuery, window, console */</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">(<span class="pl-st">function</span> (<span class="pl-vpf">$</span>) {</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">	<span class="pl-s1"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">	<span class="pl-s">var</span> <span class="pl-en">console</span> <span class="pl-k">=</span> <span class="pl-s3">window</span>.<span class="pl-en">console</span> <span class="pl-k">||</span> <span class="pl-st">function</span> () {},</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">		h5 <span class="pl-k">=</span> { <span class="pl-c">// Public API</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">			defaults <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">				debug<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">				RODom<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">				<span class="pl-c">// HTML5-compatible validation pattern library that can be extended and/or overriden.</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">				patternLibrary <span class="pl-k">:</span> { <span class="pl-c">//** TODO: Test the new regex patterns. Should I apply these to the new input types?</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">					<span class="pl-c">// **TODO: password</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">					phone<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-cce">\+</span>][<span class="pl-c1">0-9</span>]</span><span class="pl-k">{1,3}</span>(<span class="pl-c1">[ <span class="pl-cce">\.\-</span>]</span>)<span class="pl-k">?</span>)<span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-cce">\(</span>][<span class="pl-c1">0-9</span>]</span><span class="pl-k">{1,6}</span><span class="pl-c1">[<span class="pl-cce">\)</span>]</span>)<span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-c1">0-9A-Za-z</span> <span class="pl-cce">\.\-</span>]</span><span class="pl-k">{1,32}</span>)((<span class="pl-c1">[<span class="pl-c1">A-Za-z</span> <span class="pl-cce">\:</span>]</span><span class="pl-k">{1,11}</span>)<span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">{1,4}?</span>)<span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">					<span class="pl-c">// Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">					email<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>(((<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">|</span><span class="pl-c1">\d</span><span class="pl-k">|</span><span class="pl-c1">[!#<span class="pl-cce">\$</span>%&amp;&#39;<span class="pl-cce">\*\+</span><span class="pl-c1">\-<span class="pl-cce">\/</span></span>=<span class="pl-cce">\?\^</span>_`{<span class="pl-cce">\|</span>}~]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>)<span class="pl-k">+</span>(<span class="pl-cce">\.</span>(<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">|</span><span class="pl-c1">\d</span><span class="pl-k">|</span><span class="pl-c1">[!#<span class="pl-cce">\$</span>%&amp;&#39;<span class="pl-cce">\*\+</span><span class="pl-c1">\-<span class="pl-cce">\/</span></span>=<span class="pl-cce">\?\^</span>_`{<span class="pl-cce">\|</span>}~]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>)<span class="pl-k">+</span>)<span class="pl-k">*</span>)<span class="pl-k">|</span>((<span class="pl-cce">\x</span>22)((((<span class="pl-cce">\x</span>20<span class="pl-k">|</span><span class="pl-cce">\x</span>09)<span class="pl-k">*</span>(<span class="pl-cce">\x</span>0d<span class="pl-cce">\x</span>0a))<span class="pl-k">?</span>(<span class="pl-cce">\x</span>20<span class="pl-k">|</span><span class="pl-cce">\x</span>09)<span class="pl-k">+</span>)<span class="pl-k">?</span>((<span class="pl-c1">[<span class="pl-cce">\x</span>0<span class="pl-c1">1-<span class="pl-cce">\x</span></span>08<span class="pl-cce">\x</span>0b<span class="pl-cce">\x</span>0c<span class="pl-cce">\x</span>0<span class="pl-c1">e-<span class="pl-cce">\x</span></span>1f<span class="pl-cce">\x</span>7f]</span><span class="pl-k">|</span><span class="pl-cce">\x</span>21<span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\x</span>2<span class="pl-c1">3-<span class="pl-cce">\x</span></span>5b]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\x</span>5<span class="pl-c1">d-<span class="pl-cce">\x</span></span>7e]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>)<span class="pl-k">|</span>(<span class="pl-cce">\\</span>(<span class="pl-c1">[<span class="pl-cce">\x</span>0<span class="pl-c1">1-<span class="pl-cce">\x</span></span>09<span class="pl-cce">\x</span>0b<span class="pl-cce">\x</span>0c<span class="pl-cce">\x</span>0<span class="pl-c1">d-<span class="pl-cce">\x</span></span>7f]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>))))<span class="pl-k">*</span>(((<span class="pl-cce">\x</span>20<span class="pl-k">|</span><span class="pl-cce">\x</span>09)<span class="pl-k">*</span>(<span class="pl-cce">\x</span>0d<span class="pl-cce">\x</span>0a))<span class="pl-k">?</span>(<span class="pl-cce">\x</span>20<span class="pl-k">|</span><span class="pl-cce">\x</span>09)<span class="pl-k">+</span>)<span class="pl-k">?</span>(<span class="pl-cce">\x</span>22)))@(((<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">|</span><span class="pl-c1">\d</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>)<span class="pl-k">|</span>((<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">|</span><span class="pl-c1">\d</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>)(<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">|</span><span class="pl-c1">\d</span><span class="pl-k">|</span>-<span class="pl-k">|</span><span class="pl-cce">\.</span><span class="pl-k">|</span>_<span class="pl-k">|</span>~<span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>)<span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">|</span><span class="pl-c1">\d</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>)))<span class="pl-cce">\.</span>)<span class="pl-k">+</span>((<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>)<span class="pl-k">|</span>((<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>)(<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">|</span><span class="pl-c1">\d</span><span class="pl-k">|</span>-<span class="pl-k">|</span><span class="pl-cce">\.</span><span class="pl-k">|</span>_<span class="pl-k">|</span>~<span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>)<span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span>)))<span class="pl-cce">\.</span><span class="pl-k">?</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">					<span class="pl-c">// Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/iri/</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">					url: /(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;&#39;\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;&#39;\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;&#39;\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;&#39;\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;&#39;\(\)\*\+,;=]|:|@)|\/|\?)*)?/,</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">					<span class="pl-c">// Number, including positive, negative, and floating decimal. Credit: bassistance</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">					number<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>-<span class="pl-k">?</span>(?:<span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-c1">\d</span><span class="pl-k">{1,3}</span>(?:,<span class="pl-c1">\d</span><span class="pl-k">{3}</span>)<span class="pl-k">+</span>)<span class="pl-k">?</span>(?:<span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">?</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">					<span class="pl-c">// Date in ISO format. Credit: bassistance</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">					dateISO<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">\d</span><span class="pl-k">{4}</span><span class="pl-c1">[<span class="pl-cce">\/\-</span>]</span><span class="pl-c1">\d</span><span class="pl-k">{1,2}</span><span class="pl-c1">[<span class="pl-cce">\/\-</span>]</span><span class="pl-c1">\d</span><span class="pl-k">{1,2}</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">					alpha<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">					alphaNumeric<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">\w</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">					integer<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>-<span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-pds">/</span></span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">				<span class="pl-c">// The prefix to use for dynamically-created class names.</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">				classPrefix<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>h5-<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">				errorClass<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>ui-state-error<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// No prefix for these.</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">				validClass<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>ui-state-valid<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// &quot;</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">				activeClass<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// Prefix will get prepended.</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">				requiredClass<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>required<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">				requiredAttribute<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>required<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">				patternAttribute<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>pattern<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">				<span class="pl-c">// Attribute which stores the ID of the error container element (without the hash).</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">				errorAttribute<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>data-h5-errorid<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">				<span class="pl-c">// Events API</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">				customEvents<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>validate<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">				<span class="pl-c">// Setup KB event delegation.</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">				kbSelectors<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>:input:not(:button):not(:disabled):not(.novalidate)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">				focusout<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">				focusin<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">				change<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">				keyup<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">				activeKeyup<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">				<span class="pl-c">// Setup mouse event delegation.</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">				mSelectors<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>[type=&quot;range&quot;]:not(:disabled):not(.novalidate), :radio:not(:disabled):not(.novalidate), :checkbox:not(:disabled):not(.novalidate), select:not(:disabled):not(.novalidate), option:not(:disabled):not(.novalidate)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">				click<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">				<span class="pl-c">// What do we name the required .data variable?</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">				requiredVar<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>h5-required<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">				<span class="pl-c">// What do we name the pattern .data variable?</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">				patternVar<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>h5-pattern<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">				stripMarkup<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">				<span class="pl-c">// Run submit related checks and prevent form submission if any fields are invalid?</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">				submit<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">				<span class="pl-c">// Move focus to the first invalid field on submit?</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">				focusFirstInvalidElementOnSubmit<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">				<span class="pl-c">// When submitting, validate elements that haven&#39;t been validated yet?</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">				validateOnSubmit<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">				<span class="pl-c">// Callback stubs</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">				<span class="pl-en">invalidCallback</span>: <span class="pl-st">function</span> () {},</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">				<span class="pl-en">validCallback</span>: <span class="pl-st">function</span> () {},</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">				<span class="pl-c">// Elements to validate with allValid (only validating visible elements)</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">				allValidSelectors<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>:input:visible:not(:button):not(:disabled):not(.novalidate)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">				<span class="pl-c">// Mark field invalid.</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">				<span class="pl-c">// ** TODO: Highlight labels</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">				<span class="pl-c">// ** TODO: Implement setCustomValidity as per the spec:</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">				<span class="pl-c">// http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#dom-cva-setcustomvalidity</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">				markInvalid<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">markInvalid</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">					<span class="pl-s">var</span> $element <span class="pl-k">=</span> $(options.element),</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">						$errorID <span class="pl-k">=</span> $(options.errorID);</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">					$element.addClass(options.errorClass).removeClass(options.validClass);</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">					<span class="pl-c">// User needs help. Enable active validation.</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">					$element.addClass(options.settings.activeClass);</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">					<span class="pl-k">if</span> ($errorID.<span class="pl-sc">length</span>) { <span class="pl-c">// These ifs are technically not needed, but improve server-side performance </span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">						<span class="pl-k">if</span> ($element.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">							$errorID.<span class="pl-sc">text</span>($element.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">						$errorID.show();</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">					$element.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>valid<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">					options.settings.invalidCallback.<span class="pl-s3">call</span>(options.element, options.validity);</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">					<span class="pl-k">return</span> $element;</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">				<span class="pl-c">// Mark field valid.</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">				markValid<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">markValid</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">					<span class="pl-s">var</span> $element <span class="pl-k">=</span> $(options.element),</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">						$errorID <span class="pl-k">=</span> $(options.errorID);</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">					$element.addClass(options.validClass).removeClass(options.errorClass);</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">					<span class="pl-k">if</span> ($errorID.<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">						$errorID.hide();</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">					$element.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>valid<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">					options.settings.validCallback.<span class="pl-s3">call</span>(options.element, options.validity);</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">					<span class="pl-k">return</span> $element;</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">				<span class="pl-c">// Unmark field</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">				unmark<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">unmark</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">					<span class="pl-s">var</span> $element <span class="pl-k">=</span> $(options.element);</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">					$element.removeClass(options.errorClass).removeClass(options.validClass);</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">					$element.<span class="pl-sc">form</span>.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> options.element.<span class="pl-sc">id</span>).removeClass(options.errorClass).removeClass(options.validClass);</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">					<span class="pl-k">return</span> $element;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">		<span class="pl-c">// Aliases</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">		defaults <span class="pl-k">=</span> h5.defaults,</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">		patternLibrary <span class="pl-k">=</span> defaults.patternLibrary,</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">		createValidity <span class="pl-k">=</span> <span class="pl-st">function</span> <span class="pl-en">createValidity</span>(<span class="pl-vpf">validity</span>) {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">			<span class="pl-k">return</span> $.extend({</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">				customError<span class="pl-k">:</span> validity.customError <span class="pl-k">||</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">				patternMismatch<span class="pl-k">:</span> validity.patternMismatch <span class="pl-k">||</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">				rangeOverflow<span class="pl-k">:</span> validity.rangeOverflow <span class="pl-k">||</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">				rangeUnderflow<span class="pl-k">:</span> validity.rangeUnderflow <span class="pl-k">||</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">				stepMismatch<span class="pl-k">:</span> validity.stepMismatch <span class="pl-k">||</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">				tooLong<span class="pl-k">:</span> validity.tooLong <span class="pl-k">||</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">				typeMismatch<span class="pl-k">:</span> validity.typeMismatch <span class="pl-k">||</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">				valid<span class="pl-k">:</span> validity.valid <span class="pl-k">||</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">				valueMissing<span class="pl-k">:</span> validity.valueMissing <span class="pl-k">||</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">			}, validity);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">		methods <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">			<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line"><span class="pl-c">			 * Check the validity of the current field</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line"><span class="pl-c">			 * @param  {object}  settings   instance settings</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line"><span class="pl-c">			 * @param  {object}  options</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line"><span class="pl-c">			 *			.revalidate - trigger validation function first?</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line"><span class="pl-c">			 * @return {Boolean}</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line"><span class="pl-c">			 */</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">			<span class="pl-en">isValid</span>: <span class="pl-st">function</span> (<span class="pl-vpf">settings</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">				<span class="pl-s">var</span> $<span class="pl-v">this</span> <span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">				options <span class="pl-k">=</span> (settings <span class="pl-k">&amp;&amp;</span> options) <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">				<span class="pl-c">// Revalidate defaults to true</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">				<span class="pl-k">if</span> (options.revalidate <span class="pl-k">!==</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">					$<span class="pl-v">this</span>.trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>validate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">				<span class="pl-k">return</span> $<span class="pl-v">this</span>.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>valid<span class="pl-pds">&#39;</span></span>); <span class="pl-c">// get the validation result</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">			<span class="pl-en">allValid</span>: <span class="pl-st">function</span> (<span class="pl-vpf">config</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">				<span class="pl-s">var</span> valid <span class="pl-k">=</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">					formValidity <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">					$<span class="pl-v">this</span> <span class="pl-k">=</span> $(<span class="pl-v">this</span>),</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">					$allFields,</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">					$filteredFields,</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">					radioNames <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">					getValidity <span class="pl-k">=</span> <span class="pl-st">function</span> <span class="pl-en">getValidity</span>(<span class="pl-vpf">e</span>, <span class="pl-vpf">data</span>) {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">						data.e <span class="pl-k">=</span> e;</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">						formValidity.<span class="pl-s3">push</span>(data);</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">					settings <span class="pl-k">=</span> $.extend({}, config, options); <span class="pl-c">// allow options to override settings</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">				options <span class="pl-k">=</span> options <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">				$<span class="pl-v">this</span>.trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>formValidate<span class="pl-pds">&#39;</span></span>, {settings<span class="pl-k">:</span> $.extend(<span class="pl-c1">true</span>, {}, settings)});</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">				<span class="pl-c">// Make sure we&#39;re not triggering handlers more than we need to.</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">				$<span class="pl-v">this</span>.undelegate(settings.allValidSelectors,</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>.allValid<span class="pl-pds">&#39;</span></span>, getValidity);</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">				$<span class="pl-v">this</span>.delegate(settings.allValidSelectors,</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>validated.allValid<span class="pl-pds">&#39;</span></span>, getValidity);</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">				$allFields <span class="pl-k">=</span> $<span class="pl-v">this</span>.<span class="pl-s3">find</span>(settings.allValidSelectors);</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">				<span class="pl-c">// Filter radio buttons with the same name and keep only one,</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">				<span class="pl-c">// since they will be checked as a group by isValid()</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">				$filteredFields <span class="pl-k">=</span> $allFields.filter(<span class="pl-st">function</span>(<span class="pl-vpf">index</span>) {</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">					<span class="pl-s">var</span> name;</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">					<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">tagName</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>INPUT<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">						<span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-sc">type</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>radio<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">						name <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">name</span>;</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">						<span class="pl-k">if</span>(radioNames[name] <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">							<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">						radioNames[name] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">				$filteredFields.each(<span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">					<span class="pl-s">var</span> $<span class="pl-v">this</span> <span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">					valid <span class="pl-k">=</span> $<span class="pl-v">this</span>.h5Validate(<span class="pl-s1"><span class="pl-pds">&#39;</span>isValid<span class="pl-pds">&#39;</span></span>, options) <span class="pl-k">&amp;&amp;</span> valid;</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">				$<span class="pl-v">this</span>.trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>formValidated<span class="pl-pds">&#39;</span></span>, {valid<span class="pl-k">:</span> valid, elements<span class="pl-k">:</span> formValidity});</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">				<span class="pl-k">return</span> valid;</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">			<span class="pl-en">validate</span>: <span class="pl-st">function</span> (<span class="pl-vpf">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">				<span class="pl-c">// Get the HTML5 pattern attribute if it exists.</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">				<span class="pl-c">// ** TODO: If a pattern class exists, grab the pattern from the patternLibrary, but the pattern attrib should override that value.</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">				<span class="pl-s">var</span> $<span class="pl-v">this</span> <span class="pl-k">=</span> $(<span class="pl-v">this</span>),</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">					pattern <span class="pl-k">=</span> $<span class="pl-v">this</span>.filter(<span class="pl-s1"><span class="pl-pds">&#39;</span>[pattern]<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>] <span class="pl-k">?</span> $<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>pattern<span class="pl-pds">&#39;</span></span>) <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">					<span class="pl-c">// The pattern attribute must match the whole value, not just a subset:</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">					<span class="pl-c">// &quot;...as if it implied a ^(?: at the start of the pattern and a )$ at the end.&quot;</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">					re <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>^(?:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> pattern <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>)$<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">					$radiosWithSameName <span class="pl-k">=</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">					value <span class="pl-k">=</span> ($<span class="pl-v">this</span>.is(<span class="pl-s1"><span class="pl-pds">&#39;</span>[type=checkbox]<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">							$<span class="pl-v">this</span>.is(<span class="pl-s1"><span class="pl-pds">&#39;</span>:checked<span class="pl-pds">&#39;</span></span>) <span class="pl-k">:</span> ($<span class="pl-v">this</span>.is(<span class="pl-s1"><span class="pl-pds">&#39;</span>[type=radio]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">								<span class="pl-c">// Cache all radio buttons (in the same form) with the same name as this one</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">								($radiosWithSameName <span class="pl-k">=</span> $<span class="pl-v">this</span>.parents(<span class="pl-s1"><span class="pl-pds">&#39;</span>form<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">									<span class="pl-c">// **TODO: escape the radio buttons&#39; name before using it in the jQuery selector</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">									.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>input[name=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">									.filter(<span class="pl-s1"><span class="pl-pds">&#39;</span>:checked<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">									.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> $<span class="pl-v">this</span>.val()),</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">					errorClass <span class="pl-k">=</span> settings.errorClass,</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">					validClass <span class="pl-k">=</span> settings.validClass,</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">					errorIDbare <span class="pl-k">=</span> $<span class="pl-v">this</span>.attr(settings.errorAttribute) <span class="pl-k">||</span> <span class="pl-c1">false</span>, <span class="pl-c">// Get the ID of the error element.</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">					errorID <span class="pl-k">=</span> errorIDbare <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> errorIDbare.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(:<span class="pl-k">|</span><span class="pl-cce">\.</span><span class="pl-k">|</span><span class="pl-cce">\[</span><span class="pl-k">|</span><span class="pl-cce">\]</span>)<span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>$1<span class="pl-pds">&#39;</span></span>) <span class="pl-k">:</span> <span class="pl-c1">false</span>, <span class="pl-c">// Add the hash for convenience. This is done in two steps to avoid two attribute lookups.</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">					required <span class="pl-k">=</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">					validity <span class="pl-k">=</span> createValidity({element<span class="pl-k">:</span> <span class="pl-v">this</span>, valid<span class="pl-k">:</span> <span class="pl-c1">true</span>}),</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">					$checkRequired <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;input required&gt;<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">					maxlength;</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">				<span class="pl-c">/*	If the required attribute exists, set it required to true, unless it&#39;s set &#39;false&#39;.</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line"><span class="pl-c">				*	This is a minor deviation from the spec, but it seems some browsers have falsey </span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line"><span class="pl-c">				*	required values if the attribute is empty (should be true). The more conformant </span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line"><span class="pl-c">				*	version of this failed sanity checking in the browser environment.</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line"><span class="pl-c">				*	This plugin is meant to be practical, not ideologically married to the spec.</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line"><span class="pl-c">				*/</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">				<span class="pl-c">// Feature fork</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">				<span class="pl-k">if</span> ($checkRequired.filter(<span class="pl-s1"><span class="pl-pds">&#39;</span>[required]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> $checkRequired.filter(<span class="pl-s1"><span class="pl-pds">&#39;</span>[required]<span class="pl-pds">&#39;</span></span>).<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">					required <span class="pl-k">=</span> ($<span class="pl-v">this</span>.filter(<span class="pl-s1"><span class="pl-pds">&#39;</span>[required]<span class="pl-pds">&#39;</span></span>).<span class="pl-sc">length</span> <span class="pl-k">&amp;&amp;</span> $<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>required<span class="pl-pds">&#39;</span></span>) <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>false<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">					required <span class="pl-k">=</span> ($<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>required<span class="pl-pds">&#39;</span></span>) <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>);</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">				<span class="pl-k">if</span> (settings.debug <span class="pl-k">&amp;&amp;</span> <span class="pl-s3">window</span>.<span class="pl-en">console</span>) {</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">					<span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>Validate called on &quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> value <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot; with regex &quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> re <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;. Required: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> required); <span class="pl-c">// **DEBUG</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">					<span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>Regex test: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> re.<span class="pl-s3">test</span>(value) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>, Pattern: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> pattern); <span class="pl-c">// **DEBUG</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">				maxlength <span class="pl-k">=</span> <span class="pl-s3">parseInt</span>($<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>maxlength<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-s3">isNaN</span>(maxlength) <span class="pl-k">&amp;&amp;</span> value.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> maxlength) {</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">						validity.valid <span class="pl-k">=</span> <span class="pl-c1">false</span>;	</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">						validity.tooLong <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">				<span class="pl-k">if</span> (required <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>value) {</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">					validity.valid <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">					validity.valueMissing <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (pattern <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>re.<span class="pl-s3">test</span>(value) <span class="pl-k">&amp;&amp;</span> value) {</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">					validity.valid <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">					validity.patternMismatch <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">					<span class="pl-k">if</span> (<span class="pl-k">!</span>settings.RODom) {</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">						settings.markValid({</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">							element<span class="pl-k">:</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">							validity<span class="pl-k">:</span> validity,</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">							errorClass<span class="pl-k">:</span> errorClass,</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">							validClass<span class="pl-k">:</span> validClass,</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">							errorID<span class="pl-k">:</span> errorID,</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">							settings<span class="pl-k">:</span> settings</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">						});</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>validity.valid) {</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">					<span class="pl-k">if</span> (<span class="pl-k">!</span>settings.RODom) {</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">						settings.markInvalid({</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">							element<span class="pl-k">:</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">							validity<span class="pl-k">:</span> validity,</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">							errorClass<span class="pl-k">:</span> errorClass,</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">							validClass<span class="pl-k">:</span> validClass,</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">							errorID<span class="pl-k">:</span> errorID,</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">							settings<span class="pl-k">:</span> settings</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">						});</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">				$<span class="pl-v">this</span>.trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>validated<span class="pl-pds">&#39;</span></span>, validity);</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">				<span class="pl-c">// If it&#39;s a radio button, also validate the other radio buttons with the same name</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">				<span class="pl-c">// (while making sure the call is not recursive)</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">				<span class="pl-k">if</span>($radiosWithSameName <span class="pl-k">!==</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">					<span class="pl-k">&amp;&amp;</span> settings.alreadyCheckingRelatedRadioButtons <span class="pl-k">!==</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">					settings.alreadyCheckingRelatedRadioButtons <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">					$radiosWithSameName</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">						.not($<span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">						.trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>validate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">					settings.alreadyCheckingRelatedRadioButtons <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">			<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line"><span class="pl-c">			 * Take the event preferences and delegate the events to selected</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line"><span class="pl-c">			 * objects.</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line"><span class="pl-c">			 * </span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line"><span class="pl-c">			 * @param {object} eventFlags The object containing event flags.</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line"><span class="pl-c">			 * </span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line"><span class="pl-c">			 * @returns {element} The passed element (for method chaining).</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line"><span class="pl-c">			 */</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">			<span class="pl-en">delegateEvents</span>: <span class="pl-st">function</span> (<span class="pl-vpf">selectors</span>, <span class="pl-vpf">eventFlags</span>, <span class="pl-vpf">element</span>, <span class="pl-vpf">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">				<span class="pl-s">var</span> events <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">					key <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">					<span class="pl-en">validate</span> <span class="pl-k">=</span> <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">						settings.validate.<span class="pl-s3">call</span>(<span class="pl-v">this</span>, settings);</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">					};</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">				$.each(eventFlags, <span class="pl-st">function</span> (<span class="pl-vpf">key</span>, <span class="pl-vpf">value</span>) {</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">					<span class="pl-k">if</span> (value) {</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">						events[key] <span class="pl-k">=</span> key;</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">				<span class="pl-c">// key = 0;</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">				<span class="pl-k">for</span> (key <span class="pl-k">in</span> events) {</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">					<span class="pl-k">if</span> (events.hasOwnProperty(key)) {</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">						$(element).delegate(selectors, events[key] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.h5Validate<span class="pl-pds">&#39;</span></span>, validate);</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">				<span class="pl-k">return</span> element;</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">			<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line"><span class="pl-c">			 * Prepare for event delegation.</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line"><span class="pl-c">			 * </span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line"><span class="pl-c">			 * @param {object} settings The full plugin state, including</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line"><span class="pl-c">			 * options. </span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line"><span class="pl-c">			 * </span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line"><span class="pl-c">			 * @returns {object} jQuery object for chaining.</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line"><span class="pl-c">			 */</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">			<span class="pl-en">bindDelegation</span>: <span class="pl-st">function</span> (<span class="pl-vpf">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">				<span class="pl-s">var</span> $<span class="pl-v">this</span> <span class="pl-k">=</span> $(<span class="pl-v">this</span>),</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">					$forms;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">				<span class="pl-c">// Attach patterns from the library to elements.</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">				<span class="pl-c">// **TODO: pattern / validation method matching should</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">				<span class="pl-c">// take place inside the validate action.</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">				$.each(patternLibrary, <span class="pl-st">function</span> (<span class="pl-vpf">key</span>, <span class="pl-vpf">value</span>) {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">					<span class="pl-s">var</span> pattern <span class="pl-k">=</span> value.<span class="pl-s3">toString</span>();</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">					pattern <span class="pl-k">=</span> pattern.<span class="pl-s3">substring</span>(<span class="pl-c1">1</span>, pattern.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">					$(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> settings.classPrefix <span class="pl-k">+</span> key).attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>pattern<span class="pl-pds">&#39;</span></span>, pattern);</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">				$forms <span class="pl-k">=</span> $<span class="pl-v">this</span>.filter(<span class="pl-s1"><span class="pl-pds">&#39;</span>form<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">						.<span class="pl-s3">add</span>($<span class="pl-v">this</span>.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>form<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">						.<span class="pl-s3">add</span>($<span class="pl-v">this</span>.parents(<span class="pl-s1"><span class="pl-pds">&#39;</span>form<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">				$forms</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">					.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>novalidate<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>novalidate<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">					.<span class="pl-s3">submit</span>(checkValidityOnSubmitHandler);</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">				$forms.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>input[formnovalidate][type=&#39;submit&#39;]<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">click</span>(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">					$(<span class="pl-v">this</span>).closest(<span class="pl-s1"><span class="pl-pds">&quot;</span>form<span class="pl-pds">&quot;</span></span>).unbind(<span class="pl-s1"><span class="pl-pds">&#39;</span>submit<span class="pl-pds">&#39;</span></span>, checkValidityOnSubmitHandler);</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>.each(<span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">					<span class="pl-s">var</span> kbEvents <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">							focusout<span class="pl-k">:</span> settings.focusout,</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">							focusin<span class="pl-k">:</span> settings.focusin,</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">							change<span class="pl-k">:</span> settings.change,</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">							keyup<span class="pl-k">:</span> settings.keyup</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">						},</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">						mEvents <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">							click<span class="pl-k">:</span> settings.click</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">						},</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">						activeEvents <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">							keyup<span class="pl-k">:</span> settings.activeKeyup</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">						};</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">					settings.delegateEvents(<span class="pl-s1"><span class="pl-pds">&#39;</span>:input<span class="pl-pds">&#39;</span></span>, settings.customEvents, <span class="pl-v">this</span>, settings);</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">					settings.delegateEvents(settings.kbSelectors, kbEvents, <span class="pl-v">this</span>, settings);</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">					settings.delegateEvents(settings.mSelectors, mEvents, <span class="pl-v">this</span>, settings);</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">					settings.delegateEvents(settings.activeClassSelector, activeEvents, <span class="pl-v">this</span>, settings);</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">					settings.delegateEvents(<span class="pl-s1"><span class="pl-pds">&#39;</span>textarea[maxlength]<span class="pl-pds">&#39;</span></span>, {keyup<span class="pl-k">:</span> <span class="pl-c1">true</span>}, <span class="pl-v">this</span>, settings);</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line"><span class="pl-c">		 * Event handler for the form submit event.</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line"><span class="pl-c">		 * When settings.submit is enabled:</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line"><span class="pl-c">		 *  - prevents submission if any invalid fields are found.</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line"><span class="pl-c">		 *  - Optionally validates all fields.</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line"><span class="pl-c">		 *  - Optionally moves focus to the first invalid field.</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line"><span class="pl-c">		 * </span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line"><span class="pl-c">		 * @param {object} evt The jQuery Event object as from the submit event. </span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line"><span class="pl-c">		 * </span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line"><span class="pl-c">		 * @returns {object} undefined if no validation was done, true if validation passed, false if validation didn&#39;t.</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line"><span class="pl-c">		 */</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">		<span class="pl-en">checkValidityOnSubmitHandler</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">evt</span>) {</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">			<span class="pl-s">var</span> $<span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">				settings <span class="pl-k">=</span> getInstance.<span class="pl-s3">call</span>(<span class="pl-v">this</span>),</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">				allValid;</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">			<span class="pl-k">if</span>(settings.submit <span class="pl-k">!==</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">			$<span class="pl-v">this</span> <span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">			allValid <span class="pl-k">=</span> $<span class="pl-v">this</span>.h5Validate(<span class="pl-s1"><span class="pl-pds">&#39;</span>allValid<span class="pl-pds">&#39;</span></span>, { revalidate<span class="pl-k">:</span> settings.validateOnSubmit <span class="pl-k">===</span> <span class="pl-c1">true</span> });</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">			<span class="pl-k">if</span>(allValid <span class="pl-k">!==</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">				evt.preventDefault();</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">				<span class="pl-k">if</span>(settings.focusFirstInvalidElementOnSubmit <span class="pl-k">===</span> <span class="pl-c1">true</span>){</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">					<span class="pl-s">var</span> $invalid <span class="pl-k">=</span> $(settings.allValidSelectors, $<span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">									.filter(<span class="pl-st">function</span>(<span class="pl-vpf">index</span>){</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">										<span class="pl-k">return</span> $(<span class="pl-v">this</span>).h5Validate(<span class="pl-s1"><span class="pl-pds">&#39;</span>isValid<span class="pl-pds">&#39;</span></span>, { revalidate<span class="pl-k">:</span> <span class="pl-c1">false</span> }) <span class="pl-k">!==</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">									});</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">					$invalid.first().<span class="pl-s3">focus</span>();</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">			<span class="pl-k">return</span> allValid;</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">		instances <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">		buildSettings <span class="pl-k">=</span> <span class="pl-st">function</span> <span class="pl-en">buildSettings</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">			<span class="pl-c">// Combine defaults and options to get current settings.</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">			<span class="pl-s">var</span> settings <span class="pl-k">=</span> $.extend({}, defaults, options, methods),</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">				activeClass <span class="pl-k">=</span> settings.classPrefix <span class="pl-k">+</span> settings.activeClass;</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">			<span class="pl-k">return</span> $.extend(settings, {</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">				activeClass<span class="pl-k">:</span> activeClass,</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">				activeClassSelector<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> activeClass,</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">				requiredClass<span class="pl-k">:</span> settings.classPrefix <span class="pl-k">+</span> settings.requiredClass,</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">				el<span class="pl-k">:</span> <span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">		getInstance <span class="pl-k">=</span> <span class="pl-st">function</span> <span class="pl-en">getInstance</span>() {</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">			<span class="pl-s">var</span> $parent <span class="pl-k">=</span> $(<span class="pl-v">this</span>).closest(<span class="pl-s1"><span class="pl-pds">&#39;</span>[data-h5-instanceId]<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">			<span class="pl-k">return</span> instances[$parent.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>data-h5-instanceId<span class="pl-pds">&#39;</span></span>)];</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">		setInstance <span class="pl-k">=</span> <span class="pl-st">function</span> <span class="pl-en">setInstance</span>(<span class="pl-vpf">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">			<span class="pl-s">var</span> instanceId <span class="pl-k">=</span> instances.<span class="pl-s3">push</span>(settings) <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">			<span class="pl-k">if</span> (settings.RODom <span class="pl-k">!==</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">				$(<span class="pl-v">this</span>).attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>data-h5-instanceId<span class="pl-pds">&#39;</span></span>, instanceId);</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">			$(<span class="pl-v">this</span>).trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>instance<span class="pl-pds">&#39;</span></span>, { <span class="pl-s1"><span class="pl-pds">&#39;</span>data-h5-instanceId<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> instanceId });</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">	$.h5Validate <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line"><span class="pl-c">		 * Take a map of pattern names and HTML5-compatible regular</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line"><span class="pl-c">		 * expressions, and add them to the patternLibrary. Patterns in</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line"><span class="pl-c">		 * the library are automatically assigned to HTML element pattern</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line"><span class="pl-c">		 * attributes for validation.</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line"><span class="pl-c">		 * </span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line"><span class="pl-c">		 * @param {Object} patterns A map of pattern names and HTML5 compatible</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line"><span class="pl-c">		 * regular expressions.</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line"><span class="pl-c">		 * </span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line"><span class="pl-c">		 * @returns {Object} patternLibrary The modified pattern library</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line"><span class="pl-c">		 */</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line">		<span class="pl-en">addPatterns</span>: <span class="pl-st">function</span> (<span class="pl-vpf">patterns</span>) {</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line">			<span class="pl-s">var</span> patternLibrary <span class="pl-k">=</span> defaults.patternLibrary,</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line">				key;</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line">			<span class="pl-k">for</span> (key <span class="pl-k">in</span> patterns) {</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">				<span class="pl-k">if</span> (patterns.hasOwnProperty(key)) {</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">					patternLibrary[key] <span class="pl-k">=</span> patterns[key];</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">			<span class="pl-k">return</span> patternLibrary;</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line"><span class="pl-c">		 * Take a valid jQuery selector, and a list of valid values to</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line"><span class="pl-c">		 * validate against.</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line"><span class="pl-c">		 * If the user input isn&#39;t in the list, validation fails.</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line"><span class="pl-c">		 * </span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line"><span class="pl-c">		 * @param {String} selector Any valid jQuery selector.</span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line"><span class="pl-c">		 *</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line"><span class="pl-c">		 * @param {Array} values A list of valid values to validate selected </span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line"><span class="pl-c">		 * fields against.</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line"><span class="pl-c">		 */</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">		<span class="pl-en">validValues</span>: <span class="pl-st">function</span> (<span class="pl-vpf">selector</span>, <span class="pl-vpf">values</span>) {</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">			<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">				ln <span class="pl-k">=</span> values.<span class="pl-sc">length</span>,</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">				pattern <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">				re;</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">			<span class="pl-c">// Build regex pattern</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code js-file-line">			<span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> ln; i <span class="pl-k">+=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code js-file-line">				pattern <span class="pl-k">=</span> pattern <span class="pl-k">?</span> pattern <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> values[i] <span class="pl-k">:</span> values[i];</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code js-file-line">			re <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>^(?:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> pattern <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>)$<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code js-file-line">			$(selector).<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>regex<span class="pl-pds">&#39;</span></span>, re);</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code js-file-line">	$.fn.h5Validate <span class="pl-k">=</span> <span class="pl-st">function</span> <span class="pl-en">h5Validate</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code js-file-line">		<span class="pl-s">var</span>	action,</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code js-file-line">			args,</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code js-file-line">			settings;</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">typeof</span> options <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> methods[options] <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code js-file-line">			<span class="pl-c">// Whoah, hold on there! First we need to get the instance:</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code js-file-line">			settings <span class="pl-k">=</span> getInstance.<span class="pl-s3">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code js-file-line">			args <span class="pl-k">=</span> [].slice.<span class="pl-s3">call</span>(arguments, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code js-file-line">			action <span class="pl-k">=</span> options;</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code js-file-line">			args.<span class="pl-s3">shift</span>();</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code js-file-line">			args <span class="pl-k">=</span> $.merge([settings], args);</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code js-file-line">			<span class="pl-c">// Use settings here so we can plug methods into the instance dynamically?</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code js-file-line">			<span class="pl-k">return</span> settings[action].<span class="pl-s3">apply</span>(<span class="pl-v">this</span>, args);</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code js-file-line">		settings <span class="pl-k">=</span> buildSettings.<span class="pl-s3">call</span>(<span class="pl-v">this</span>, options);</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code js-file-line">		setInstance.<span class="pl-s3">call</span>(<span class="pl-v">this</span>, settings);</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code js-file-line">		<span class="pl-c">// Returning the jQuery object allows for method chaining.</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code js-file-line">		<span class="pl-k">return</span> methods.bindDelegation.<span class="pl-s3">call</span>(<span class="pl-v">this</span>, settings);</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code js-file-line">}(jQuery));</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05107s from github-fe138-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-fc447938e306b7b2c26a33cfee9dfda9052aeb1aa6ad84b72f1b35fd008efe9e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-56c56f7fe2ed90ca50b9eefebccd56f3b9729a85d7ba17f0f9c9ebd02f20a7e3.js" type="text/javascript"></script>
      
      
  </body>
</html>

