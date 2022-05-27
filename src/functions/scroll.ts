const scrollToSection = (elementRef: any) => {
  window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
};

export default scrollToSection;
