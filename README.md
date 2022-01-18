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

Now, in `_app.js`

```
import { GCScript } from "goatcounter-nextjs";
```
and in `return`

```
    <GCScript siteUrl={"https://site.goatcounter.com/count"} />
    <Component {...pageProps} />
```
_Note: `GCScript` supports `scriptSrc` parameter to specify self hosted count.js location_

## Usage
To send custom events to GoatCounter,

first
```
import { GCEvent } from "goatcounter-nextjs";

```
then use `GCEvent` like this
```
GCEvent(path,title);
```