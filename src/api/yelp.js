import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Y-O_Ye9elsrgWjB6MCtvftBh6F7ARGR2nCLqVgdCwPB7xtPjC3HeTZ5_LdAwy_OOlvlHMSkK0e0eRr5osIwoxIhHO-QPOJLz49OpvQ92MpF_VzEJBGiIYAkMLVdpYnYx",
  },
});
