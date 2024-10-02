import { FormSchema } from "@/lib/formSchema";

export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};


export type Unit = {
  value: string;
  label: string;
};


export type UnitCategory = {
  label: string;
  units: Unit[];
};
export interface DosageForm {
  label: string;
  value: string;
}

export type Generics = Pick<FormSchema, "generics">;

// export interface DosageForm {
//   aerosol: string;
//   aerosolFoam: string;
//   aerosolMetered: string;
//   aerosolPowder: string;
//   aerosolSpray: string;
//   barChewable: string;
//   bead: string;
//   capsule: string;
//   capsuleCoated: string;
//   capsuleCoatedPellets: string;
//   capsuleCoatedExtendedRelease: string;
//   capsuleDelayedRelease: string;
//   capsuleDelayedReleasePellets: string;
//   capsuleExtendedRelease: string;
//   capsuleFilmCoatedExtendedRelease: string;
//   capsuleGelatinCoated: string;
//   capsuleLiquidFilled: string;
//   cellularSheet: string;
//   chewableGel: string;
//   cloth: string;
//   concentrate: string;
//   cream: string;
//   creamAugmented: string;
//   crystal: string;
//   disc: string;
//   douche: string;
//   dressing: string;
//   drugElutingContactLens: string;
//   elixir: string;
//   emulsion: string;
//   enema: string;
//   extract: string;
//   fiberExtendedRelease: string;
//   film: string;
//   filmExtendedRelease: string;
//   filmSoluble: string;
//   forSolution: string;
//   forSuspension: string;
//   forSuspensionExtendedRelease: string;
//   gas: string;
//   gel: string;
//   gelDentifrice: string;
//   gelMetered: string;
//   globule: string;
//   granule: string;
//   granuleDelayedRelease: string;
//   granuleEffervescent: string;
//   granuleForSolution: string;
//   granuleForSuspension: string;
//   granuleForSuspensionExtendedRelease: string;
//   gumChewing: string;
//   implant: string;
//   inhalant: string;
//   injectableFoam: string;
//   injectableLiposomal: string;
//   injection: string;
//   injectionEmulsion: string;
//   injectionLipidComplex: string;
//   injectionPowderForSolution: string;
//   injectionPowderForSuspension: string;
//   injectionPowderForSuspensionExtendedRelease: string;
//   injectionPowderLyophilizedForLiposomalSuspension: string;
//   injectionPowderLyophilizedForSolution: string;
//   injectionPowderLyophilizedForSuspension: string;
//   injectionPowderLyophilizedForSuspensionExtendedRelease: string;
//   injectionSolution: string;
//   injectionSolutionConcentrate: string;
//   injectionSuspension: string;
//   injectionSuspensionExtendedRelease: string;
//   injectionSuspensionLiposomal: string;
//   injectionSuspensionSonicated: string;
//   insert: string;
//   insertExtendedRelease: string;
//   intrauterineDevice: string;
//   irrigant: string;
//   jelly: string;
//   kit: string;
//   liniment: string;
//   lipstick: string;
//   liquid: string;
//   liquidExtendedRelease: string;
//   lotion: string;
//   lotionAugmented: string;
//   lotionShampoo: string;
//   lozenge: string;
//   mouthwash: string;
//   notApplicable: string;
//   oil: string;
//   ointment: string;
//   ointmentAugmented: string;
//   paste: string;
//   pasteDentifrice: string;
//   pastille: string;
//   patch: string;
//   patchExtendedRelease: string;
//   patchExtendedReleaseElectricallyControlled: string;
//   pellet: string;
//   pelletImplantable: string;
//   pelletsCoatedExtendedRelease: string;
//   pill: string;
//   plaster: string;
//   poultice: string;
//   powder: string;
//   powderDentifrice: string;
//   powderForSolution: string;
//   powderForSuspension: string;
//   powderMetered: string;
//   ring: string;
//   rinse: string;
//   salve: string;
//   shampoo: string;
//   shampooSuspension: string;
//   soap: string;
//   solution: string;
//   solutionConcentrate: string;
//   solutionForSlush: string;
//   solutionGelFormingDrops: string;
//   solutionGelFormingExtendedRelease: string;
//   solutionDrops: string;
//   sponge: string;
//   spray: string;
//   sprayMetered: string;
//   spraySuspension: string;
//   stick: string;
//   strip: string;
//   suppository: string;
//   suppositoryExtendedRelease: string;
//   suspension: string;
//   suspensionExtendedRelease: string;
//   suspensionDrops: string;
//   swab: string;
//   syrup: string;
//   system: string;
//   tablet: string;
//   tabletChewable: string;
//   tabletChewableExtendedRelease: string;
//   tabletCoated: string;
//   tabletCoatedParticles: string;
//   tabletDelayedRelease: string;
//   tabletDelayedReleaseParticles: string;
//   tabletEffervescent: string;
//   tabletExtendedRelease: string;
//   tabletFilmCoated: string;
//   tabletFilmCoatedExtendedRelease: string;
//   tabletForSolution: string;
//   tabletForSuspension: string;
//   tabletMultilayer: string;
//   tabletMultilayerExtendedRelease: string;
//   tabletOrallyDisintegrating: string;
//   tabletOrallyDisintegratingDelayedRelease: string;
//   tabletSoluble: string;
//   tabletSugarCoated: string;
//   tabletWithSensor: string;
//   tampon: string;
//   tape: string;
//   tincture: string;
//   troche: string;
//   tube: string;
//   unitDose: string;
//   vaginalInsert: string;
//   vapor: string;
//   wafer: string;
//   water: string;
//   wax: string;
// }