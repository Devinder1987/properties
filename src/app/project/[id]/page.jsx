import Layout from '../../../components/Layout';
import ProjectDetails from './ProjectDetails';
import { findByIdProject } from '../../api/utils/utils';

export default async function ProductDetailsPage({ params }) {
  const project = await findByIdProject(params.id);
  if (!project) {
    return <div>Error 404: No Project found.</div>;
  }
  return (
    <Layout>
      <ProjectDetails project={project} />
    </Layout>
  );
}
