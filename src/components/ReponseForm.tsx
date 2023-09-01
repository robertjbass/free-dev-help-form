import { useState, useEffect } from "react";
import { ResponseDoc, addResponse } from "@/firebase";

const ResponseForm = () => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [form, setForm] = useState<ResponseDoc>({
    name: "",
    availability: "",
    contact: "",
    experience: "",
    learn: "",
  });

  useEffect(() => {
    const canSubmit = Object.values(form).every((value) => value !== "");
    setCanSubmit(canSubmit);
  }, [form]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;

    const docId = await addResponse(form);

    if (!docId) alert("Error submitting form");

    console.log("added", docId);

    alert("Form submitted successfully");

    setForm({
      name: "",
      availability: "",
      contact: "",
      experience: "",
      learn: "",
    });
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl text-center mb-4">Request one on one help</h3>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2">
            What should I call you?
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border border-gray-300 rounded-md outline-none border-none p-2 text-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="availability" className="mb-2">
            When will you be available?
          </label>
          <input
            id="availability"
            type="text"
            placeholder="Availability"
            value={form.availability}
            onChange={(e) => setForm({ ...form, availability: e.target.value })}
            className="border border-gray-300 rounded-md outline-none border-none p-2 text-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="contact" className="mb-2">
            How should I contact you? (email address or discord username)
          </label>
          <input
            id="contact"
            type="text"
            placeholder="Contact"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            className="border border-gray-300 rounded-md outline-none border-none p-2 text-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="experience" className="mb-2">
            How would you describe your current level of experience?
          </label>
          <input
            id="experience"
            type="text"
            placeholder="Experience"
            value={form.experience}
            onChange={(e) => setForm({ ...form, experience: e.target.value })}
            className="border border-gray-300 rounded-md outline-none border-none p-2 text-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="learn" className="mb-2">
            What do you want to learn?
          </label>
          <input
            id="learn"
            type="text"
            placeholder="Learn"
            value={form.learn}
            onChange={(e) => setForm({ ...form, learn: e.target.value })}
            className="border border-gray-300 rounded-md outline-none border-none p-2 text-lg"
          />
        </div>

        <button
          type="submit"
          className={[
            " text-white rounded-md px-4 py-2",
            canSubmit ? "bg-blue-500" : "opacity-50",
          ].join(" ")}
          disabled={!canSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResponseForm;
