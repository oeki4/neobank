interface SubscribeEmailBody {
  email: string;
}

export const subscribeEmail = async (body: SubscribeEmailBody) => {
  const res = await fetch("http://localhost:8080/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    mode: "cors",
  });
  if (res.status === 200) {
    return {
      ok: true,
    };
  } else {
    return {
      ok: false,
    };
  }
};
