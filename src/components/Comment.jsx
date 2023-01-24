import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(comment) {
        onDeleteComment(comment)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    const hasLikes = likeCount > 0

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/glaubermatos.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Devon Lane</strong>
                            <time title='8 de maio as 08:13h' dateTime="2022-05-08 08:13:50">Cerca de 2h atrás</time>
                        </div>

                        <button
                            title="Deletar comentário"
                            onClick={() => handleDeleteComment(content)}
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button className={hasLikes && styles.active} onClick={handleLikeComment}>
                        <ThumbsUp size={24} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}