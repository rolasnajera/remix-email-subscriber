import { useFetcher } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import imgNotification from "~/assets/images/notification.jpg";
import SvgSpinner from "~/ui/primitives/svg-spinner";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

type ActionData = {
  errorMessage?: string;
  ok?: boolean;
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  console.log(email);
  await fakeNetwork();
  return json({ ok: true });
}

async function fakeNetwork() {
  return new Promise((res) => {
    setTimeout(res, 4000);
  });
}

export default function Index() {
  const fetcher = useFetcher<ActionData>();
  const isPosting = fetcher.state !== "idle";

  return (
    <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
      <div className="flex flex-col md:flex-row rounded-l-lx">
        <img
          src={imgNotification}
          alt=""
          className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
        />
        <div className="p-6 md:p-12">
          <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
            The most wonderful community working with cutting edge technologies.
          </h2>
          <p className="max-w-sm my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
            You can learn a lot with us, and of course you can find amazing people here. Subscribe
            now.
          </p>
          {!fetcher.data?.ok && (
            <fetcher.Form
              method="post"
              className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input
                type="email"
                name="email"
                id="email"
                disabled={isPosting}
                placeholder="Enter your email"
                className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
              />
              <button
                className="px-5 py-3 text-xs rounded md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
                disabled={isPosting}>
                {!isPosting ? "Subscribe" : <SvgSpinner />}
              </button>
            </fetcher.Form>
          )}
          {fetcher.data && fetcher.data.ok && (
            <p className="bg-emerald-800 rounded-md max-w-sm my-3 py-3 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Your subscription was successfully created. Please review your inbox.
            </p>
          )}
          {fetcher.data && fetcher.data.errorMessage && (
            <p className="bg-orange-900 rounded-md max-w-sm my-3 py-3 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              There was an error. Please try later.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
