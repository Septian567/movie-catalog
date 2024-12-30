/*eslint-disable*/

import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";

describe("Liking A movie", () => {
  it("Should show the like button when the movie has not been liked before", async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      movie: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="like this movie"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the movie has not been liked before", async () => {
    document.body.innerHTML = '<div id="likedButtonContainer"></div>';

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      movie: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="unlike this movie"]')
    ).toBeFalsy();
  });
});
