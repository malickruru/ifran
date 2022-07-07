const HideStep = (id) => {
  gsap.to(`#ins_form_${id}`, {
    opacity: 0,
    duration: .5,
    onComplete: () => {ShowStep(id)},
  });
};

const ShowStep = (id) => {
    $(`#ins_form_${id}`).classList.add("d-none")
    $(`#ins_form_${id+1}`).classList.remove("d-none")
    gsap.to(`#ins_form_${id+1}`, {
    opacity: 1,
    duration: 0.5,
  });
};
