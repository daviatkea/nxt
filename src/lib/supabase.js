const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const options = {
  headers: {
    apikey: supabaseAnonKey,
  },
};

export async function getData(endpoint) {
  const response = await fetch(`${supabaseUrl}/${endpoint}`, options);
  const data = await response.json();
  return data;
}

export async function getDataById(endpoint, slug) {
  const response = await fetch(
    `${supabaseUrl}/${endpoint}?slug=eq.${slug}`,
    options
  );
  const data = await response.json();
  return data;
}
