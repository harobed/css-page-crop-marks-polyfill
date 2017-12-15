# Some tips to create HTML print pages

## Enable page cross marks to adjust your layout...

Enable [css-page-cross-marks-polyfill.js](css-page-cross-marks-polyfill.js) in your html page:

```
<head>
  ...
  <script data-page-width="210mm" data-page-height="297mm" data-page-margin="10mm" src="https://cdn.rawgit.com/harobed/css-page-crop-marks-polyfill/master/css-page-cross-marks-polyfill.js"></script>
</head>
```

Note: this page cross marks are only used to create your design, remote it before publish your stuff.

## Enable print media CSS

In Firefox, type `Shift F2` and enter:

```
>> media emulate print
```


## Configure page size

Put in your css:

```
@page {
  margin: 1cm;
  size: A4;
}
```

## Add break pages

```
.page-break	{ display: block; page-break-before: always; }
```

Notes:

* You can not use break page in [CSS3 Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)


## Use Google Chrome headless to generate PDF file

```
$ docker run -it --rm --cap-add=SYS_ADMIN -v `pwd`:/usr/src/app/ zenika/alpine-chrome chromium-browser --headless --disable-gpu --print-to-pdf="output.pdf" http://example.com/
```
