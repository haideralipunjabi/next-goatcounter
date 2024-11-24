# next-goatcounter

next-goatcounter is a plugin that makes integrating [GoatCounter](https://goatcounter.com) Analytics into you NextJS project easy.  
Pull Requests are very welcome.

**Feel like supporting this free plugin?**

<a href="https://www.buymeacoffee.com/HAliPunjabi" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


## Setup

First, install it:

```
npm install next-goatcounter
```
or  
```
yarn add next-goatcounter
```

Now, in `app/layout.js`

```js
import { GCScript } from "next-goatcounter";
```
and in `return`

```html
    <body>
    <GCScript siteUrl={"https://site.goatcounter.com/count"} />
    {
        children
    }
    </body>
```
_Note: `GCScript` supports `scriptSrc` parameter to specify self hosted count.js location_

## Usage

### Display View Count

The package provides two components - `ViewCount` and `TotalViews` to show no. of views from Goat Counter.

```js
    import { ViewCount, TotalViews } from 'next-goatcounter';

    <ViewCount /> // Displays non-unique views of current page
    <TotalViews /> // Displays non-unique views of the entire webstie
```
Both `ViewCount` and `TotalViews` have the `fallback` optional prop to display a fallback while content is loading. [Read More](https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading)

```js
    import { ViewCount, TotalViews } from 'next-goatcounter';

    <ViewCount fallback={<>Loading...</>} />

```

`ViewCount` also has the optional `path` prop to change the path for which view count is displayed. 

```js
    import { ViewCount, TotalViews } from 'next-goatcounter';

    <ViewCount path="/posts/123" />
```

There is also a `getViewCount()` function that you can use for more customisation. Ensure that it is used in a client component only.


### Custom Events
To send custom events to GoatCounter,

first
```js
import { GCEvent } from "next-goatcounter";
```
then use `GCEvent` like this
```js
GCEvent(path, title);
```
