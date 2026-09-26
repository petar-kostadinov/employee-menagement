const baseUrl =
  "https://ufieaoipmfrdsaeuqiiw.supabase.co/rest/v1/users";
const apiKey =
  "sb_publishable_EMg9mHWGTEL52tLkacHaIg_tUZthVvZ";

export async function fetchUsers() {
  const response = await fetch(baseUrl, {
    headers: {
      apiKey: apiKey,
    },
  });

  const data = await response.json();

  return data;
}
