const landingPage = document.getElementById("page");

const dataFromApi = [
  {
    task_id: 18882,
    task_title: "Explore the world of management",
    task_description:
      "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
    status: "notworkyet",
    assets: [
      {
        asset_id: 18883,
        asset_title: "Technical Project Management",
        asset_description:
          "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
        asset_content: " https://www.youtube.com/embed/TiMRwri1xJ8",
        asset_type: "display_asset",
        asset_content_type: "video",
      },
      {
        asset_id: 18884,
        asset_title: "Threadbuild",
        asset_description:
          "Watch the video and thread build, and jot out key threads while watching that video.",
        asset_content: " ",
        asset_type: "input_asset",
        asset_content_type: "threadbuilder",
      },
      {
        asset_id: 18885,
        asset_title: "Structure you pointers ",
        asset_description:
          "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
        asset_content: " ",
        asset_type: "input_asset",
        asset_content_type: "article",
      },
      {
        asset_id: 18886,
        asset_title: "4SA Method",
        asset_description: "To explore more read more",
        asset_content:
          " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
        asset_type: "display_asset",
        asset_content_type: "article",
      },
    ],
  },
];


let idAsset = 18883;

dataFromApi[0].assets.forEach((nestedElement, idx) => {
  let parent = document.createElement("div");
  let title = document.createElement("div");
  let description = document.createElement("div");
  let spanTitle = document.createElement("span");
  let spanDescription = document.createElement("span");
  let smallSpan = document.createElement("span");
  let spanIntroDescription = document.createTextNode("Description: ");

  let img = document.createElement("img");
  img.src = "../assets/icon.png";
  img.className = "icon";

  parent.id = idAsset + idx;
  parent.className = `card-${idx + 1}-data`;
  spanTitle.className = `s-${idx + 1}`;
  spanDescription.className = `d-${idx + 1}`;
  title.className = "title";
  description.className = "description";
  if (idx === 2) {
    description.className = " description special-description";
  }

  smallSpan.className = "small-span";
  spanTitle.textContent = nestedElement.asset_title;
  spanDescription.textContent = nestedElement.asset_description;

  
  title.appendChild(spanTitle);
  title.appendChild(img);

  smallSpan.appendChild(spanIntroDescription);
  spanDescription.prepend(smallSpan);
  description.appendChild(spanDescription);

  parent.appendChild(title);
  parent.appendChild(description);


  document.getElementById(`c-${idx + 1}`).prepend(parent);
});

const imgClicked = document.getElementById("img-clicked");
const extend1 = document.getElementById("extend-1");
const extend2 = document.getElementById("extend-2");
const w0 = document.getElementById("w-0");
const topic = document.getElementById("topic");
const overlayContent = document.getElementById("overlay-content");

imgClicked.addEventListener("click", () => {
  extend1.classList.toggle("special-width");
  extend2.classList.toggle("special-width");
  imgClicked.classList.toggle("reverse-direction");
  w0.classList.toggle("topic-container-w-0");
  topic.classList.toggle("visual-topic");
  overlayContent.classList.toggle("overlay-3-content");
});

