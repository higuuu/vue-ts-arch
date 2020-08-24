import { vxm } from "@/store";
import { getRepos } from "@/api/getRepos";

jest.mock("@/api/getRepos");

const dummyGetReposListResponse = [
  {
    name: "dummy_name1",
    html_url: "dummy_url1",
    description: "dummy_description1"
  },
  {
    name: "dummy_name2",
    html_url: "dummy_url2",
    description: "dummy_description2"
  }
];

describe("store/module/repos test", () => {
  describe("正常系", () => {
    afterEach(() => {
      (getRepos as jest.Mock).mockReset();
      vxm.repos["saveRepos"]([]);
    });

    it("正常にリストを取得できると、allRepos に取得した配列が入る", async () => {
      (getRepos as jest.Mock).mockReturnValue({
        data: dummyGetReposListResponse
      });

      await vxm.repos.getRepos("test");
      expect(vxm.repos.allRepos).toEqual(dummyGetReposListResponse);
    });
  });

  describe("異常系", () => {
    afterEach(() => {
      (getRepos as jest.Mock).mockReset();
      vxm.repos["saveRepos"]([]);
    });

    it("認証失敗時には、allRepos に変更は無い", async () => {
      (getRepos as jest.Mock).mockRejectedValue(
        new Error("Request failed with status code 401")
      );

      expect(vxm.repos.getRepos("")).rejects.toEqual(
        new Error("Request failed with status code 401")
      );
      expect(vxm.repos.allRepos).toEqual([]);
    });
  });
});
