const loadMoreBtn = document.getElementById("loadMoreBtn");
const blogList = document.getElementById("blogList");

const moreBlogs = [
  {
    date: "10/02",
    title: "Cách chọn phụ kiện phù hợp với tone màu outfit",
    desc: "Chỉ cần chọn đúng màu túi, giày hoặc mắt kính, tổng thể trang phục của bạn sẽ hài hòa và cuốn hút hơn rất nhiều.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
  },
  {
    date: "15/02",
    title: "Những món đồ basic nên có trong tủ quần áo",
    desc: "Áo thun trắng, sơ mi, quần jeans, sneaker và blazer là những món đồ cơ bản nhưng cực kỳ linh hoạt cho nhiều hoàn cảnh.",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80"
  }
];

let loaded = false;

loadMoreBtn.addEventListener("click", function () {
  if (loaded) {
    loadMoreBtn.innerText = "Đã hiển thị tất cả";
    loadMoreBtn.disabled = true;
    return;
  }

  moreBlogs.forEach((blog) => {
    const blogCol = document.createElement("div");
    blogCol.className = "col-lg-6";

    blogCol.innerHTML = `
      <div class="blog-box">
        <div class="blog-img">
          <img src="${blog.img}" alt="${blog.title}">
          <h1>${blog.date}</h1>
        </div>
        <div class="blog-details">
          <h4>${blog.title}</h4>
          <p>${blog.desc}</p>
          <a href="#">Tiếp Tục Đọc</a>
        </div>
      </div>
    `;

    blogList.appendChild(blogCol);
  });

  loaded = true;
  loadMoreBtn.innerText = "Đã tải thêm bài viết";
});
