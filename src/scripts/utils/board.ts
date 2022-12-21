import { TileXYType, TileXYZType } from "phaser3-rex-plugins/plugins/board/types/Position"
import { SceneWithRex } from "../type"

export const isCorner = (scene: SceneWithRex, tileXYZ: TileXYZType) => {
  return (
    (tileXYZ.x === 0 && tileXYZ.y === 0) ||
    (tileXYZ.x === 0 && tileXYZ.y === scene.board!.height - 1) ||
    (tileXYZ.x === scene.board!.width - 1 && tileXYZ.y === 0) ||
    (tileXYZ.x === scene.board!.width - 1 && tileXYZ.y === scene.board!.height - 1)
  )
}

export const isBorder = (scene: SceneWithRex, tileXYZ: TileXYZType) => {
  return (
    !isCorner(scene, tileXYZ) &&
    (tileXYZ.x === 0 ||
      tileXYZ.x === scene.board!.width - 1 ||
      tileXYZ.y === 0 ||
      tileXYZ.y === scene.board!.height - 1)
  )
}

export const getRandomNeighbor = (scene: SceneWithRex, tileXYZ: TileXYZType) => {
  if(!scene || !scene.board) {
    return null
  }
  const neighborChesses = scene.board!.getNeighborChess(tileXYZ, [0, 1, 2, 3], 1)
  if (
    Array.isArray(neighborChesses) &&
    ((isCorner(scene, tileXYZ) && neighborChesses.length === 2) ||
      (isBorder(scene, tileXYZ) && neighborChesses.length === 3) ||
      (!isCorner(scene, tileXYZ) && !isBorder(scene, tileXYZ) && neighborChesses.length === 4))
  ) {
    // console.log('走投无路啦！')
    return null
  }
  const res = { ...tileXYZ }
  const direction = Math.floor(Math.random() * 4)
  switch (direction) {
    case 0:
      if (res.x === scene.board!.width - 1) {
        return getRandomNeighbor(scene, tileXYZ)
      } else {
        res.x += 1
      }
      break
    case 1:
      if (res.y === scene.board!.height - 1) {
        return getRandomNeighbor(scene, tileXYZ)
      } else {
        res.y += 1
      }
      break
    case 2:
      if (res.x === 0) {
        return getRandomNeighbor(scene, tileXYZ)
      } else {
        res.x -= 1
      }
      break
    case 3:
      if (res.y === 0) {
        return getRandomNeighbor(scene, tileXYZ)
      } else {
        res.y -= 1
      }
      break
  }
  if (scene.board!.tileXYZToChess(res.x, res.y, 1)) {
    return getRandomNeighbor(scene, tileXYZ)
  }
  return { tile: res, direction }
}

export const isEmpty = (scene: SceneWithRex, tile: TileXYZType):boolean => {
  return ! scene.board!.tileXYZToChess(tile.x, tile.y, tile.z)
}