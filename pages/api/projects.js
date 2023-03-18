import Airtable from 'airtable';

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('app7bGAvQuX4XEYQn').table('projects');

export async function getProjects() {
  const projectsSelected = await airtable
    .select({
      filterByFormula: '({enabled} = 1)',
      sort: [{ field: 'date', direction: 'desc' }]
    })
    .all();
  return projectsSelected.map((project) => project.fields);
}

export default async function handler(_, res) {
  try {
    const projects = await getProjects();
    return res.status(200).json({ projects });
  } catch (e) {
    return res.status(500).json({ error: e?.message });
  }
}
