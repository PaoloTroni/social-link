export const getMyUserDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getUserDataService = async (id, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`, {
    headers: { Authorization: token },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const loginUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const registerUserService = async ({ email, password, nombre }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, nombre }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const editUserService = async ({ newEmail, newName, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/edit`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newEmail, newName }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const editBioService = async ({ biography, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/bio`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ biography }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const editPassService = async ({
  password,
  newPass,
  confirmNewPass,
  token,
}) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/users/password`,
    {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, newPass, confirmNewPass }),
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const deleteUserService = async ({ password, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
    method: "DELETE",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
