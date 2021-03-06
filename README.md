# Backdrop Pelican Theme
This is a theme for the [Pelican](http://docs.getpelican.com/en/3.5.0/) static
site generator. It is based on [Zurb Foundation](http://foundation.zurb.com/),
customized with [Sass](http://sass-lang.com/). It is managed using
[Grunt](http://gruntjs.com/).

To install dependencies

    yarn global add grunt-cli
    yarn install

To build the theme, run

    grunt

Alternatively, a precompiled version of this theme is available in the
[Pelican Themes](https://github.com/getpelican/pelican-themes) repository.

If you wish to customize this theme, template files are contained within the
`html` directory, while (s)css is within the `scss` directory. This theme
uses no custom JavaScript, but this can be added to the file `js/app.js` if
desired.


## About the Theme
Backdrop is a responsive theme which adjusts itself to different screen and
window sizes, built on [Zurb Foundation](http://foundation.zurb.com/).
It is designed to look modern, but at the same time traditional,
using a serif font and darker colours. It features full
[Disqus](https://disqus.com/) integration and can be customized through
variables in your Pelican configuration file. See it live at
[my blog](http://ashwinvis.github.io/).

<img src="https://raw.githubusercontent.com/ashwinvis/pelican-bluedrop/master/examples/demo/images/demo-desktop.png" width="70%">

This is an example of the same on a tablet.

<div>
<img src="https://raw.githubusercontent.com/ashwinvis/pelican-bluedrop/master/examples/demo/images/demo-tablet-top.png" width="35%"/>
<img src="https://raw.githubusercontent.com/ashwinvis/pelican-bluedrop/master/examples/demo/images/demo-tablet-bot.png" width="35%"/>
</div>

This is an example of the same on a mobile.
<div>
<img src="https://raw.githubusercontent.com/ashwinvis/pelican-bluedrop/master/examples/demo/images/demo-mobile-top.png" width="35%"/>
<img src="https://raw.githubusercontent.com/ashwinvis/pelican-bluedrop/master/examples/demo/images/demo-mobile-bot.png" width="35%"/>
</div>

I you want to customize Backdrop, perhaps consider using
[Sass](http://sass-lang.com/) and [Grunt](http://gruntjs.com/), as I did when
originally designing it. See the
[backdrop-theme](https://github.com/cmacmackin/backdrop-theme) repository.


## Compatible Plugins
The theme has been designed to use the [representative_image](https://github.com/getpelican/pelican-plugins/tree/master/representative_image) plugin. However,
websites will look fine without it. The
[tipue_search](https://github.com/getpelican/pelican-plugins/tree/master/tipue_search) plugin (which allows the website to be searched) should be used. In order
for this to work, `'search.html'` must be added to the `DIRECT_TEMPLATES`
variable. Backdrop is also known to work with the
[render_math](https://github.com/getpelican/pelican-plugins/tree/master/render_math)
and [sitemap](https://github.com/getpelican/pelican-plugins/tree/master/sitemap)
plugins, but these work with all themes and Backdrop is in no way special in
this regard. In future, support may be added for the
[pelican-githubprojects](https://github.com/kura/pelican-githubprojects) plugin.

## Theme Variables
The following variables can be set in your `pelicanconf.py` file in order to
customize your website.

- `SITESUBTITLE`, appears below the SITENAME at the top of the page
- `PROFILE_IMAGE`, the path to a picture of you or your organization to display
  in the sidebar next to any description
- `FAVICON`, the path to a PNG or ICO image to be used as a favicon
- `BACKDROP_IMAGE`, the path to the picture to be displayed in the
  sidebar/bottom-bar
- `SITE_DESCRIPTION`, a few words about you or your website, to be displayed in
  the sidebar next to the profile image
- `LINKS`, a list of tuples (title, URL) for external sites which will appear
  on the sidebar. Can be used as a blogroll
- `DISQUS_URL`, the short [Disqus](https://disqus.com/) sitename, allowing
  Disqus comments to be displayed on your website
- `SOCIAL`, a list of tuples (title, URL) to appear below the PROFILE_IMAGE
  and SITE_DESCRIPTION, linking to social media. The title should be whatever
  you want the text to be in the link, but in order to have an icon it must
  correspond to the name of a
  [Font Awesome](http://fortawesome.github.io/Font-Awesome/icons/#brand)
  icon when converted to lowercase.
- `EMAIL`, displayed alongside SOCIAL
- `YEAR`, the year to appear in the copyright notice. (Hint: `from datetime
  import date`, `YEAR = date.today().year`)
- `TAG_CLOUD_MAX_ITEMS`, the number of tags to display in the footer of the
  website
- `LICENSE`, the license under which to release the websites contents
  (ex: Creative Commons). Write it in HTML in order to use an image and/or link.
- `BLOGKEYWORDS`, a list or tuple of strings containing keywords to be placed
  in the metadata of your website, allowing Google to better categorize it

The paths for FAVICON, PROFILE\_IMAGE, and BACKDROP\_IMAGE can all use the
same `{filename}`/`|filename|` syntax as done when linking between articles.

If your website is paginated, make sure to include the following:
`PAGINATED_DIRECT_TEMPLATES = ('categories', 'archives')`.
