# Subscribe email project

## Learning

Within this project I'm learning:

- [Tailwind installation](https://tailwindcss.com/docs/guides/remix)
- [Asset imports](https://remix.run/docs/en/main/file-conventions/asset-imports) - For Reading images (or any file).
- [useNavigation](https://remix.run/docs/en/main/hooks/use-navigation#navigationformaction) - for ux feedback when submitting or loading.

## Roadmap

- Improve UX when click in `Subscribe`button.
- Save new emails into a json file
- Create a backend to save new emails
- Send confirm email
- Create confirm email page. (includes the database update)

## Additional resources

- Fake timer to see navigation working

```js
async function fakeNetwork() {
  return new Promise((res) => {
    console.log("yup");
    setTimeout(res, 4000);
  });
}
```

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
