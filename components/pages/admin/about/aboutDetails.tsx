"use client";
import Section from "@/components/helpers/section";
import Heading from "@/components/typography/heading";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IconTrash } from "@tabler/icons-react";

function AboutDetails() {
  const [isEditing, setIsEditing] = useState(false);
  
  // These will eventually be fetched from the database
  const [aboutData, setAboutData] = useState({
    title: "Software Engineer",
    paragraph: "I'm a passionate developer building amazing web applications. I love learning new technologies and solving complex problems. My journey in tech started with a curiosity to understand how things work on the internet, and it has evolved into a career dedicated to creating impactful digital experiences. When I'm not coding, you can find me exploring the outdoors or reading a good book.",
    image: "",
  });

  const [editData, setEditData] = useState(aboutData);

  const handleSave = () => {
    // Here you would typically make an API call to save the data
    setAboutData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(aboutData);
    setIsEditing(false);
  };

  return (
    <Section className="my-8 p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-600 hover:border-orange-400 transition-all hover:shadow-lg hover:shadow-orange-500/20 mb-4">
      <div className="flex justify-between items-center pb-4">
        <Heading size="sm" className="font-bold text-white">
          Personal statement
        </Heading>
        {!isEditing && (
          <Button 
            onClick={() => setIsEditing(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors self-end"
          >
            Edit About
          </Button>
        )}
      </div>
      <hr className="border-gray-600" />
      <div className="mt-6 text-gray-300">
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="about-title" className="block text-sm font-medium text-gray-300 mb-1">
                Title
              </label>
              <Input
                id="about-title"
                value={editData.title}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                className="w-full bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <label htmlFor="about-image" className="block text-sm font-medium text-gray-300 mb-1">
                Personal Image
              </label>
              <Input
                id="about-image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setEditData({ ...editData, image: reader.result as string });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="w-full bg-gray-700 border-gray-600 text-white cursor-pointer"
              />
              {editData.image && (
                <div className="mt-4 flex items-end gap-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-2">Image Preview:</p>
                    <img src={editData.image} alt="Preview" className="w-24 h-24 object-cover rounded-full border-2 border-gray-600" />
                  </div>
                  <Button 
                    type="button" 
                    variant="destructive" 
                    onClick={() => {
                      setEditData({ ...editData, image: "" });
                      const fileInput = document.getElementById("about-image") as HTMLInputElement;
                      if (fileInput) fileInput.value = "";
                    }}
                    className="flex gap-2 items-center mb-2"
                  >
                    <IconTrash size={16} /> Remove
                  </Button>
                </div>
              )}
            </div>
            <div>
              <label htmlFor="about-paragraph" className="block text-sm font-medium text-gray-300 mb-1">
                Summary
              </label>
              <Textarea
                id="about-paragraph"
                value={editData.paragraph}
                onChange={(e) => setEditData({ ...editData, paragraph: e.target.value })}
                className="w-full h-40 bg-gray-700 border-gray-600 text-white resize-y"
              />
            </div>
            <div className="flex gap-2 justify-end pt-2">
              <Button onClick={handleCancel} variant="outline" className="text-black bg-white hover:bg-gray-200">
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-orange-500 hover:bg-orange-600 text-white">
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6 p-4 border border-gray-600 rounded-xl hover:border-orange-400 transition-all items-start">
            {aboutData.image && (
              <div className="shrink-0 mx-auto md:mx-0">
                <img 
                  src={aboutData.image} 
                  alt="Profile" 
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-gray-600 shadow-md"
                />
              </div>
            )}
            <div className="space-y-4 flex-1">
              <Heading size="sm" className="font-bold text-white">
                {aboutData.title}
              </Heading>
              <p className="text-lg leading-relaxed text-gray-300 whitespace-pre-wrap">
                {aboutData.paragraph}
              </p>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

export default AboutDetails;
