package cn.enilu.guns.service.system;


import cn.enilu.guns.bean.vo.node.Node;
import cn.enilu.guns.bean.vo.node.ZTreeNode;

import java.util.List;

/**
 * Created  on 2018/3/25 0025.
 *
 * @author enilu
 */
public interface RoleService {
    List<ZTreeNode> roleTreeList();
    List<ZTreeNode> roleTreeListByRoleId(Long[] ids);

    void setAuthority(Long roleId, String ids);

    void delRoleById(Long roleId);

    List<Node> generateRoleTree(List<ZTreeNode> roleTreeList);
}
