import React from "react";

export interface TpbLogoProps {}

const TpbLogo = (props: TpbLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 50"
      style={{
        height: "auto",
        width: "100px",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M105.6 15.4c-.5 0-1 .1-1.5.4-.5.3-.8.7-1 1.1-.2.5-.3 1-.4 1.7h.4c.1-.6.2-1 .5-1.2.2-.2.5-.3.8-.3.2 0 .5 0 .9.1.7.2 1.3.3 1.8.3.7 0 1.6-.2 2.6-.5-1.1.7-1.8 1.3-2.2 1.7s-.7.8-.8 1.3c-.2.5-.3 1.2-.3 2.3-.4 0-.8-.1-1-.1-.7 0-1.4.2-1.8.6-.5.4-.8 1-.8 1.7l.4.1c.2-.3.3-.6.5-.7.3-.2.7-.3 1.1-.3.7 0 1.2.3 1.5.8.2.3.3.9.3 1.6h-.4c-.7 0-1.3.2-1.7.6s-.6.9-.6 1.5v.3h.4c.1-.4.2-.7.4-.9.2-.2.4-.3.7-.3.3 0 .6.1.8.3.2.2.3.5.3.8 0 .3-.1.6-.3.9-.2.3-.6.8-1.3 1.5-.7.7-1.1 1.2-1.3 1.6-.2.4-.3.7-.3 1 0 .3.1.6.3.8.2.2.4.3.6.3.1 0 .3-.1.4-.2.1-.1.2-.2.2-.4s-.1-.4-.2-.6c-.2-.3-.2-.5-.2-.6 0-.4.3-.7.8-1.1.8-.5 1.9-.8 3.2-.8 1.1 0 2.1.2 3 .5.6.2 1.2.5 1.8.9 1.9-1.6 4.1-2.5 6.8-2.8v-3.8c0-.9-.1-1.5-.3-1.9-.2-.4-.5-.7-1-.9-.5-.2-1.2-.4-2.2-.5 1.2-.9 2-1.7 2.4-2.3.4-.6.7-1.3.7-1.9 0-.7-.3-1.4-.8-2-.4-.4-1-.7-1.7-.9-2.4.7-4 1.3-4.7 1.8-.7.5-1.2 1-1.5 1.6-.3.6-.4 1.7-.4 3.2V25c0 1.2-.2 2.2-.7 2.8-.5.6-1.3 1.2-2.7 1.8.7-.7 1.1-1.4 1.4-1.9.2-.6.3-1.3.3-2.3v-4.6c0-1.2.3-2.2.8-3 .5-.7 1.6-1.5 3.2-2.3l-.2-.5c-.6.3-1.1.4-1.5.5-.4.1-.8.1-1.2.1-.6 0-1.3-.1-2.2-.3-1.1.2-1.8.1-2.1.1zm-89.1.3c-.4.6-.7.9-1 1.1-.3.2-.6.2-1.1.2-.7 0-2.1-.2-4.1-.5-2-.3-3.4-.5-4.1-.5-1.1 0-2.1.2-3 .6-.9.4-1.6 1-2.1 1.8-.4.6-.7 1.4-1 2.5l.4.2c.3-.8.6-1.4.9-1.9.4-.4.8-.8 1.5-1 .6-.2 1.1-.3 1.6-.3L6 18c-.9.6-1.6 1.2-2.1 1.8-.9.8-1.5 1.7-1.9 2.7-.4.9-.6 1.9-.6 3 0 1 .2 1.9.6 2.7.4.8.9 1.5 1.4 2.1.6.6 1.2 1 1.9 1.3 1.2.5 2.5.8 3.9.8s2.7-.3 3.8-.9c1.1-.6 2-1.3 2.7-2.3.4-.6.8-1.4 1.1-2.4l-.4-.2c-.6 1-1.2 1.8-1.9 2.3-.7.5-1.6 1-2.7 1.3V18.9c.5 0 1 .1 1.3.1.7 0 1.3-.1 1.8-.4.5-.2.9-.6 1.2-1 .3-.4.5-1 .6-1.7l-.2-.2zm26.6.1c-.6 0-1.2.1-1.7.3-.5.2-1 .6-1.5 1.1l.3.3c.6-.4 1.2-.6 1.7-.6s.9.1 1.3.3c.4.2.6.5.8.8.1.3.2.9.2 1.6v.8l-2.9 1.9c-.4.3-.9.5-1.4.8v.5c1 .3 1.9.7 2.5 1.2.7.5 1.1 1.1 1.4 1.7.3.6.4 1.4.4 2.5-1.1.2-2 .5-2.7 1-.7.4-1.6 1.2-2.6 2.3l.4.4c.7-.6 1.5-1 2.2-1.3.7-.3 1.7-.4 2.8-.5v4.5h4.2V31c.7.1 1.3.2 2 .3.7.2 1.5.4 2.4.8l3.4-3.1v-7.1c0-1-.1-1.8-.3-2.3-.2-.5-.6-1.1-1.2-1.7-.6-.6-1.7-1.4-3.3-2.4l-3.1 2v-2h-.5v2.3L46.5 19c0-.7-.1-1.3-.4-1.7-.2-.4-.6-.8-1.2-1.1-.5-.2-1.1-.4-1.8-.4zm-20.5.5c-.5.1-1 .2-1.4.4-.4.2-.9.5-1.3.9-.4-.3-.7-.6-.9-.7-.2-.1-.6-.3-.9-.4l-.1.3c.5.3.8.6 1 .9.2.3.2 1 .2 1.9v10.2l-.9.9 2 1.6 2-1.6-1-.7v-6.2l1.9-1.6c.4.3.7.5.9.8.1.2.2.6.2 1.1v4.7c0 1.7-.1 2.8-.2 3.2-.2.5-.5 1.1-1.1 1.5-.6.5-1.5 1-3 1.6l.1.4c1.8-.6 3.2-1.4 4.3-2.2.9-.6 1.5-1.3 1.8-2.1.2-.4.3-1.2.3-2.1V24c0-1.1-.1-1.8-.3-2.3-.2-.4-.7-.9-1.4-1.4L21.3 23v-3.6c0-.8.1-1.5.3-1.8.2-.4.6-.7 1.1-1.1l-.1-.2zm92.3.2c.8.4 1.4.7 1.8 1.2.4.5.6 1 .6 1.6 0 .8-.2 1.5-.7 2.1-.5.7-1.2 1.3-2.3 1.9v-2.9h-.5v9.3c-.9-.3-1.9-.4-2.9-.4-.6 0-1.2 0-1.9.1 1.3-.8 2.2-1.3 2.6-1.7.4-.4.7-.8.9-1.2.1-.4.2-1 .2-1.9V20c0-.8 0-1.4.2-1.8.1-.3.3-.7.6-.9.1-.1.6-.4 1.4-.8zm-53.5.1-.5 2.4h.5l1.5-2.4h-1.5zm-11.6.9c1.2.6 2.1 1.1 2.7 1.6.6.5 1 1 1.2 1.4.2.4.3 1 .3 1.6-.6.4-1.1.6-1.5.8-.4.1-.9.2-1.3.2-.5 0-.9-.1-1.3-.2s-.9-.4-1.5-.8v-3.6l1.4-1zm37 .3-3.1 3.9v.5h1.1v6.4c0 .5-.1.9-.2 1.2-.1.2-.3.4-.6.6v.2c1.1.3 2 .9 2.8 1.8l2.5-2-.3-.3-.7.5-1.3-.9v-7.5h2.2v-1.3H87l.1-3.1h-.3zm-80.2.3.6.1v8.3c0 .9-.1 1.4-.2 1.7-.1.3-.4.7-1 1.1-1.7-1.3-2.6-3-2.6-5.1 0-1.2.3-2.4.9-3.6.6-.8 1.3-1.7 2.3-2.5zm2.9.4c.5.1 1.2.2 1.9.3v11.5c-.6.1-1.1.1-1.5.1-.6 0-1.3-.1-1.9-.3-.4-.1-.9-.3-1.5-.6 1.2-1 2.1-1.7 2.5-2.2.2-.3.4-.5.4-.7.1-.2.1-.7.1-1.5v-6.6zm38.4.3v16.3h-1.3V19.7l1.3-.9zM33 20.4l-2.4 1.2c-.5.2-1 .4-1.7.7v6.4c0 .7 0 1.2-.1 1.4-.1.2-.2.4-.5.6v.3c.9.2 1.6.4 2 .5.5.2 1.1.5 1.8.9l3.6-2.5-.2-.3-1.7 1.2-2.6-1v-2l5-3.5-3.2-3.9zm27.6 0-2 1.6.8.9v6.2c0 .9.1 1.6.3 2 .2.4.6.8 1.2 1.2l2.4-2-.3-.3c-.3.3-.5.4-.6.5-.1 0-.1.1-.2.1s-.2-.1-.3-.3c-.1-.2-.2-.6-.2-1.2V23l.9-.9-2-1.7zm6.5 0-2.3 2 .3.3c.3-.3.5-.4.7-.4.2 0 .3.1.4.3.1.2.2.6.2 1.2v4.6c0 .7-.1 1.1-.2 1.4-.1.2-.3.5-.6.7v.2c.5.1.9.3 1.4.6.4.2.9.6 1.5 1.2l2.8-2.3-.3-.5-1.2.9-1.3-.9v-6.5l1.1-1L71 24l1.7-1.5-1.7-2-2.5 2.2c0-.4-.1-.7-.2-.9-.2-.5-.6-.9-1.2-1.4zm10.6 0c-.7.7-1.4 1-2.3 1h-.7l-.2.3 1.4 2.9c-.9 1-1.5 2-1.9 2.7-.3.6-.4 1.2-.4 1.9 0 1 .6 2 1.9 3.1l3.4-2.7c0 .6.1 1.1.3 1.5.2.4.6.8 1.1 1.2l2.4-2.1-.3-.2c-.3.2-.4.3-.5.4-.1 0-.2.1-.3.1-.2 0-.3-.1-.4-.3-.1-.2-.2-.7-.2-1.5v-4.8c0-.6 0-1 .2-1.3.1-.3.4-.8.8-1.4l-.4-.1c-.2.3-.3.4-.4.5-.1.1-.2.1-.4.1-.3 0-.8-.1-1.5-.3-.5-.4-1.1-.6-1.6-1zm17.3 0-2.4 1.2c-.5.2-1 .4-1.7.7v6.4c0 .7 0 1.2-.1 1.4s-.3.4-.5.6v.3c.9.2 1.6.4 2 .5.5.2 1.1.5 1.8.9l3.6-2.5-.2-.3-1.8 1.2-2.6-1v-2l5-3.5-3.1-3.9zm30.4 0c-.7.7-1.4 1-2.3 1h-.7l-.2.3 1.4 2.9c-.9 1-1.5 2-1.9 2.7-.3.6-.4 1.2-.4 1.9 0 1 .6 2 1.9 3.1l3.4-2.7c0 .6.1 1.1.3 1.5.2.4.6.8 1.1 1.2l2.4-2.1-.3-.3c-.3.2-.4.3-.5.4-.1 0-.2.1-.3.1-.2 0-.3-.1-.4-.3-.1-.2-.2-.7-.2-1.5v-4.8c0-.6 0-1 .2-1.3.1-.3.4-.8.8-1.4l-.4-.1c-.2.3-.3.4-.4.5-.1.1-.2.1-.4.1-.3 0-.8-.1-1.5-.3-.5-.3-1.1-.5-1.6-.9zm8 0-2.3 2 .3.4.1-.1c.2-.2.4-.3.5-.3.2 0 .3.1.4.3.2.3.2.8.2 1.5v5.3c0 .4 0 .8-.1 1-.1.2-.2.5-.3.8-.1.1-.2.3-.5.5-.5.5-.8 1.1-.8 1.6 0 .6.2 1 .7 1.4.5.4 1.1.6 2 .6.8 0 1.5-.2 2-.6.3-.2.5-.5.5-.7 0-.1-.1-.2-.1-.3-.1-.1-.2-.1-.4-.1-.1 0-.2 0-.3.1-.1.1-.2.2-.4.5-.1.2-.3.4-.4.5-.3.2-.7.2-1.1.2-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.7-.6-1.1 0-.2.1-.4.2-.6.1-.2.4-.5.7-.8.2-.1.6-.4 1.4-.9 1.8-1.1 3.1-2 3.9-2.6.8-.7 1.4-1.4 1.8-2.1.4-.7.6-1.5.6-2.2 0-1.4-.6-2.7-1.7-3.9l-3.4 2.7v-.2c0-.6-.1-1-.3-1.3-.1-.3-.5-.6-1.1-1.1zm-89.2.8v3.3c-.4-.4-.8-.7-1.1-1-.4-.2-.8-.5-1.3-.7l2.4-1.6zm-12.9.5 2.8 3.1-2.9 2.1v-5.1l.1-.1zm62 0 2.8 3.1-2.9 2.1v-5.1l.1-.1zm-18.2.2 3.8 1.2V26l-2.5-1.2-1.3-2.9zm47.7 0 3.8 1.2V26l-2.5-1.2-1.3-2.9zm13.8.4c.8 1 1.2 1.9 1.2 2.9 0 .7-.2 1.5-.7 2.4-.4.8-1.2 1.6-2.2 2.4v-6.3l1.7-1.4zm-82.6.3v3.5c-.6-.3-1.1-.6-1.5-.7-.4-.1-.8-.2-1.3-.2-.4 0-.9.1-1.3.2s-.9.3-1.5.7v-3.4l1.4.7c.4.1.8.2 1.3.2s.9-.1 1.3-.2 1-.4 1.6-.8zm61.9.2c.6.3 1.1.6 1.3.9.2.3.4.7.4 1.2-.6.2-1.2.3-1.7.3s-1-.1-1.7-.3v-1.1c.3-.1.9-.4 1.7-1zm-39.7 2.3 2.7 1.3v2.7l-1.7 1.4c-1.1-.8-1.6-1.8-1.6-3-.1-.7.2-1.5.6-2.4zm47.7 0 2.7 1.3v2.7l-1.7 1.4c-1.1-.8-1.6-1.8-1.6-3-.1-.7.1-1.5.6-2.4zm-9.7.3c.6.2 1.1.3 1.7.3.5 0 1-.1 1.7-.3v2c-.6-.2-1.2-.3-1.7-.3s-1 .1-1.6.3v-2zm-63 .4c.5 0 .9.1 1.3.2s.9.4 1.5.8v3.8c-1.1-.5-2.2-.9-3-1.2-.9-.2-1.7-.4-2.6-.4v-2.3c.6-.4 1.1-.6 1.5-.8.4-.1.8-.1 1.3-.1zm64.6 1.8c.5 0 1.1.1 1.7.4v1.5c-.8.2-1.6.5-2.4.9-.3-.2-.6-.3-.9-.5v-2c.6-.2 1.1-.3 1.6-.3z"
        style={{
          fill: "#906444",
        }}
      />
    </svg>
  );
};

export default TpbLogo;
