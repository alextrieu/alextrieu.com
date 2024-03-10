import React from "react";
import MainLayout from "../layout/MainLayout";
import Portfolio from "../Portfolio/Portfolio";

export default function WorkPage() {
  return (
    <MainLayout>
      <Portfolio showDescription={true} />
    </MainLayout>
  );
}
