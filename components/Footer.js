const Footer = () => {
  const frontendVersion =
    process.env.NEXT_PUBLIC_FRONTEND_VERSION ?? 'undefined';
  const backendVersion =
    process.env.BACKEND_VERSION ?? globalThis?.backendVersion ?? 'undefined';

  return (
    <div>
      Frontend version <b>{frontendVersion}</b> &nbsp; Backend version{' '}
      <b>{backendVersion}</b>
    </div>
  );
};

export default Footer;
