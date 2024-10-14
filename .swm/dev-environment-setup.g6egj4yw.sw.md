---
title: Dev environment setup
---
To run your local dev environment you will need a few things on your machine. Follow the steps below.

## Installations

- Install [npm](https://www.npmjs.com/)

- Install [Tailwindcss](https://tailwindcss.com/)

- Install [DaisyUI](https://daisyui.com/)

&nbsp;

## Running the environment

To start tailwind:

- In the terminal, navigate to your repository
- write and execute:&nbsp;

```
npm run dev
```

&nbsp;

<SwmSnippet path="/package.json" line="8">

---

The <SwmToken path="/package.json" pos="8:2:2" line-data="    &quot;dev&quot;: &quot;tailwindcss -i ./src/input.css -o ./dist/output.css --watch&quot;">`dev`</SwmToken> command references this script in the <SwmPath>[package.json](/package.json)</SwmPath> file

```json
    "dev": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
```

---

</SwmSnippet>

## Testing

In the terminal you should see something like this

```
PS C:\Users\mirco\Documents\GitHub\personal_daisyUI_v2> npm run dev

> personal_daisyui_v1@1.0.0 dev
> tailwindcss -i ./src/input.css -o ./dist/output.css --watch


Rebuilding...

🌼   daisyUI 4.12.8
├─ ✔︎ 4 themes added            https://daisyui.com/docs/themes
╰─ ❤︎ Support daisyUI project:  https://opencollective.com/daisyui


Done in 1842ms.
```

&nbsp;

&nbsp;

## Congrats

You now have your dev environment ready 🎉

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBcGVyc29uYWxfZGFpc3lVSV92MiUzQSUzQU1pcmNvYnJi" repo-name="personal_daisyUI_v2"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
