export const getAllLinksServices = async (token, queryParams) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}?${queryParams}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getSingleLinkService = async (id, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/link/${id}`, {
    headers: { Authorization: token },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sendLinkService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const deleteLinkService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/link/${id}`, {
    method: "DELETE",
    headers: { Authorization: token },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const votarLinkService = async ({ idLink, voto, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/votos/${idLink}`,
    {
      method: "POST",
      body: JSON.stringify({ voto }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
