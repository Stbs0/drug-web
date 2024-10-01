import formSchema, { FormSchema } from "@/lib/formSchema";
import DrugForm from "@/pages/DrugForm";
import { DrugForms, OralDosageForm } from "@/types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

const RHFProviderContext = () => {
  const methods = useForm<FormSchema>({
    defaultValues: {
      brand: "",
      generics: [{ generic: "" }],
      manufacturer: "",
      dosageForm: DrugForms.ORAL,
      typeOfDosageForm: OralDosageForm.TABLET,
      strength: [
        {
          nominator: 0,
          denominator: 0,
          nominatorUnit: "mg",
          denominatorUnit: "ml",
        },
      ],
      agency: "",
      packaging: "",
      price: 0,
    },
    mode: "all",
    resolver: zodResolver(formSchema),
  });

  return (
    <FormProvider {...methods}>
      <DrugForm />
    </FormProvider>
  );
};

export default RHFProviderContext;
