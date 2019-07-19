import React from 'react';
import HeadDefault from 'components/HeadDefault';
import PageHeader from 'components/PageHeader';
import PageFooter from 'components/PageFooter';
import './index.css';

interface ComponentRouteProps {
  component: React.ComponentType;
}

export default function ComponentRoute(props: ComponentRouteProps) {

  const Comp = props.component;
  console.log("was called");

  return (
    <>
      <div className="CRContent">
        <Comp />
      </div>
    </>
  );
}
