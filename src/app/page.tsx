"use client";

import React, { useEffect, useState } from "react";
import NDK from "@nostr-dev-kit/ndk";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  const getuserInfo = async () => {
    const ndk = new NDK({
      explicitRelayUrls: ["wss://relay.primal.net", "wss://nostr.wine"]
    });
    ndk.connect();

    //matt : npub1m830l0zyglanr33mdhv4mewplmwwqffhezckvl8l9fzl4z2w5u9sxvl7yk

    const pablo = ndk.getUser({
      // npub: "npub1l2vyh47mk2p0qlsku7hg0vn29faehy9hy34ygaclpn66ukqp3afqutajft"
      npub: "npub1m830l0zyglanr33mdhv4mewplmwwqffhezckvl8l9fzl4z2w5u9sxvl7yk"
    });
    await pablo.fetchProfile();

    pablo.profile.name = "Matt";

    await pablo.publish();

    console.log(pablo.profile);
    setUser(pablo.profile);
  };

  useEffect(() => {
    getuserInfo();
  }, []);

  return <></>;
}
