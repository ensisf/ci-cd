const Footer = () => {
  const frontendVersion = process.env.NEXT_PUBLIC_FRONTEND_VERSION ?? 'Unknown';
  const backendVersion =
    process.env.BACKEND_VERSION ?? globalThis?.backendVersion ?? 'Unknown';

  return (
    <div>
      Frontend version <b>{frontendVersion}</b> &nbsp; Backend version{' '}
      <b>{backendVersion}</b>
    </div>
  );
};

export default Footer;
