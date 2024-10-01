import { SfButton, SfInput } from "@storefront-ui/react";

const ProductForm = () => {
  return (
    <>
      <div className="px-4">
        <h1
          style={{ textAlign: "center", fontSize: "20px" }}
          className="typography-headline-4 font-bold"
        >
          Create New Product
        </h1>
        <form>
          <label className="block my-4">
            <span className="typography-label-md font-medium">Name *</span>
            <SfInput
              style={{ width: "300px" }}
              width="200"
              type="text"
              required
            />
          </label>

          <label className="block my-4">
            <span className="typography-label-md font-medium">Price *</span>
            <SfInput
              style={{ width: "300px" }}
              width="200"
              type="email"
              required
            />
          </label>

          <div className="flex gap-x-4 md:justify-center mt-6">
            <SfButton type="submit" className="flex-grow md:flex-grow-0">
              Save
            </SfButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
